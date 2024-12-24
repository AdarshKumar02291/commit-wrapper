const vscode = require("vscode");
const { generateCommitMessage } = require("./openai");
const { exec } = require("child_process");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let disposable = vscode.commands.registerCommand(
        "commit-message-generator.generateCommitMessage",
        async function () {
            // Get the Git diff
            exec("git diff --cached", async (err, stdout) => {
                if (err) {
                    vscode.window.showErrorMessage("Error fetching Git diff");
                    return;
                }

                const diff = stdout;
                vscode.window.showInformationMessage("Generating commit message...");
                const message = await generateCommitMessage(diff);

                // Display the result in a VS Code input box
                vscode.window.showInputBox({
                    value: message,
                    prompt: "Review and edit the generated commit message",
                }).then((finalMessage) => {
                    if (finalMessage) {
                        exec(`git commit -m "${finalMessage}"`, (err) => {
                            if (err) {
                                vscode.window.showErrorMessage("Error committing changes");
                            } else {
                                vscode.window.showInformationMessage("Commit successful!");
                            }
                        });
                    }
                });
            });
        }
    );

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
