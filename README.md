# Uncommon React useEffect Bug: Infinite Loop

This repository demonstrates a subtle bug related to the `useEffect` hook in React that can lead to an infinite loop.  The issue lies in how the state is updated within the `useEffect`'s callback.

## Bug Description

The `bug.js` file contains a React component that attempts to update the state (`count`) inside `useEffect` without a proper condition. This creates an infinite loop because every change in `count` triggers another `useEffect` invocation.

## Solution

The `bugSolution.js` file shows the corrected version. Instead of directly setting the state to a value, it updates state by introducing a dependency on `count` which is not changed after the first render.