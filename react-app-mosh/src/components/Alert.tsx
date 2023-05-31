//    Passing Children
//
//    There are instances where we would want to pass a child to
//    a component, just like how we pass a list group to a div
//    element before.
//    In this case, we need to create a component that can accept
//    children.
//    ---------------------------------------------------------

//  Instead of defining a function, and exporting it, we can opt
//  to choose a shortcut.
//  To do this:
//      - Go to Extension of vscode
//      - Search for "ES7+". This is an extension for react redux
//        and react native
//      - Go back to Alert.tsx
//      - Close it and reopen so that the newly installed extension
//        will be properly available to Alert.tsx
//      - Type "rafce"
//  If you do this, you will get something like this:
// import React from 'react'
//
// const Alert = () => {
//   return (
//     <div>Alert</div>
//   )
// }
//
// export default Alert

//    To use Alert, we need to borrow from bootstrap:
//      - Go to "getbootstrap.com/docs"
//      - Navigate to Components ->> Alerts
//      - Refer to the documentation on what class to use in
//        in the Alert div element
//      -
import React, { ReactNode } from "react";

//  If you want to use the Alert element like this:
//      - <Alert>Some Word</Alert>
//  You should edit AlertProps
//      - children: string
//
//  If you want to use the Alert element like this:
//      - <Alert>Some <span>Word</span></Alert>
//  You should edit AlertProps
//      - children: ReactNode
interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
