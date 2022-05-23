# TASK 3

## TASK 3.1

Added Circle or Square should vanish after 10 seconds.

Use `setTimeout` function and `useEffect` React hook to handle that.

## TASK 3.2

Use [Text Field](https://mui.com/material-ui/react-text-field/) component from material-ui (design system) in SquareBox component. Use the integer value if it's provided via text field as the time after which Square or Circle should vanish.

## TIPS

There are two ways how you can handle task 3.1:

In the first approach, the `SquareBox` component controls the removing of the shape component. You can extend addSquare/addCirclt (btw try to merge these two functions together and call it `addShape` with shape argument) with use of setTimeout. Use the id field that I added to recoginze which shape should be removed.

In the second apprach, we can use `callbacks`. Callback is the function that you pass to e.g. children component that is later called by it when something happened (`onClick` is an example of callback). You can extend Circle/Square components with prop e.g. `onTimeout` that requires function:

```
<Circle onTimeout={() => removeShape(square.id)}/>
```

All you have to do, is to run passed callback using the timeout.