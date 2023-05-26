import React from "react";
import SmallHeader from "./SmallHeader";

const Blog = () => {
  return (
    <div>
      <div className="hidden md:block">
        <SmallHeader>Question & Answer</SmallHeader>
      </div>
      <div className="mx-12 md:my-32 flex justify-center mt-4 md:mt-12 ">
        <div className="md:w-2/4 space-y-2">
          <h2 className="font-bold tex-2xl">
            When Should You Use Context Api?
          </h2>
          <p>
            Context api use for when your need some data to be accessible by
            many components at different nesting levels or when we use props
            drilling then we use context api for your works easy.
          </p>
          <h2 className="font-bold tex-2xl">What Is Custom Hooks?</h2>
          <p>
            A custom hook is a special JavaScript function whose name starts
            with 'use' and can be used to call other hooks. Let's take a look at
            some major differences between a custom React JS hook and React JS
            components: A custom hook does not require a specific signature.
          </p>
          <h2 className="font-bold tex-2xl">
            What is useRef? How to Use useRef?
          </h2>
          <p>
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </p>
          <h2 className="font-bold tex-2xl">What is useMemo?</h2>
          <p>
            useMemo() is a function that returns a memoized value of a passed in
            resource-intensive function. It is very useful in optimizing the
            performance of a React component by eliminating repeating heavy
            computations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
