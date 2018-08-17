# Lab 05: Linked Lists

## Implement a Singly Linked List Data Structure

### Specifications

- Read all of these instructions carefully. Name things exactly as described, or you will get a ZERO without comment 
- Do all your work in a public repository (matching the example provided by your instructor) called `data-structures-and-algorithms`, with a well-formatted, detailed top-level README.md
- Create a branch in your repository called `linked_list`
- On your branch, create...
    - _C#_: Create a class named `LinkedList()` outside of `Main()` in your `Program.cs` file. Call Your newly created method in `Main()` once complete. 
    - _JavaScript_: a file called `linked-list.js`
    - _Python_: a file called `linked_list.py`
    - _Java_: a file called `LinkedList.java`
- Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
    - _NOTE: You can find an example of this configuration for your course in your class lecture repository._

### Features

- Create a Node type that has properties for the value stored in the Node, and a pointer to the next Node. 
- Create a LinkedList type that has a head property. It creates an empty Linked List when instantiated.
    - This type should be aware of a default empty value assigned to `head` when the list is created.
    - Define a method called `insert` which takes any value as an argument and adds a new node wtih that value to the `head` of the list with an O(1) Time performance.
    - Define a method called `includes` which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node's value somewhere within the list.
- At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

### Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write at least three test assertions for each method that you define. 

Ensure your tests are passing before you submit your solution.

### Stretch Goal

Create a new branch called `doubly_linked_list`, and, using the resources available to you online, implement a doubly linked list (completely separate from your singly linked list). 

### Documentation: Your README.md

```markdown
# Singly Linked List
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->

## API
<!-- Description of each method publicly available to your Linked List -->
```

### Submission Instructions

1. Create a pull request from your branch to your `master` branch
1. In your open pull request, leave as a comment [a checklist](https://github.com/blog/1825-task-lists-in-all-markdown-documents){:target="_blank"} of the specifications and tasks above, with the actual steps that you completed checked off
1. Submitting your completed work to Canvas:
    1. Copy the link to your open pull request and paste it into the corresponding Canvas assignment
    1. Leave a description of how long this assignment took you in the comments box
    1. Add any additional comments you like about your process or any difficulties you may have had with the assignment
1. Merge your branch into `master`, and delete your branch (don't worry, the PR link will still work)
