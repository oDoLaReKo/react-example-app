# TASK 2

Before the start, please install the extension for the VS code - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

ESlint is a tool for the static analysis - it watches your code and check against a set of coding-style rules (here's an example of such rule - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/array-type.md).

This time I would like to focus on two things:

- modify code using git branches
- creating a new react component

Before you start to code, pull the latest changes from the repository and next use `git checkout -b task-2`. This way you create a copy of the main branch. Such copy can be modified separately and when the change is ready, merged back to the main branch. As soon as your change is ready - push your changes as follows:

```
git commit -a -m "my commit"
git push origin task-2
```

Then go to the github and create a pull request. Pull request allows to review changes before they are merged to the target branch (main in our case).

## TASK 2.1

Create a new component Circle - that receives color as property and shows a circle filled with a given color.
Add another button "Add circle" that adds the circle component to the list, so it can looks like:

![circles](./task_2_1.png)
