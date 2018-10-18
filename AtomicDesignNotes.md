Atomic Design
---
Design inspiration found below mixed with some uncle bob
http://atomicdesign.bradfrost.com/chapter-2/

Style Guide... notes

Each layers naming becomes more specific as the component becomes more composed. Meaning there is less likelihood of naming collisions??

class names only, no id selectors

how strict do we define molecules and organisms?  Can two molecules be composed to make one complex molecule


Atoms style rules
    - Atoms are an element and should consist of only one tag in most cases.  
    - This layer should be used to override browser styles and can style the element directly by tag??
    - all styles in this layer are prefixed with a-
    - this layer should also contain base application styling, commonly reoccurring elements
    - the rules in this layer are flexible, if you need a unique button and don't want to get there by using an existing atom
    due to complexity feel free and make a new element following the directory structure guidelines
    - colors and other such styles should never be baked in, see enhancers.  One exception would be if the atom was specifically named and built to support this style, it has become so common that is worth building a dedicated atom.

Molecules 
    - molecule naming should become more specific, a molecule will perform a simple task
    - prefixed with m-

organisms
    - are composed components and are very specific named
    - prefixed with o-

templates
    - a partially completed molecule, organism or page
    - could be complete organisms just stripped of styling for dynamic theme
    - could be something like a modal that requires child elements to complete the organism

Directory Structure
    - Following the atomic structure, each layer is responsible for both element and styles. Using atoms as an example we get
    atoms->elementType->styles
                      ->element

Style prefixing
    - Each style applied by class name will be prefixed with the layer that the CSS can be found in, a style found in the atom layer
    will be prefixed with a- ie a-plainButton

Enhancers
    - the style followed by -- then the type of enhancer.  a-input--removedBorder
    - each layer should contain a file for CSS enhancers ?? making them easier to find more reusable

Props and Styles
    - atom layer styles can be passed down from parent structures if properly prefixed, this style must live in the correct CSS file and layer.
    - className='b-textInput--removeOutline b-textInput--removeBorder' the class names are passed down from a parent and added to 
    but should never remove from the atom. 
    - The need to remove styles from an element ??

Js and Styles
    - 

Additional notes add on 10/10
what is atomic design?
	- atomic design allows developers and designers to easily work within a large code base without losing their minds.  The atomic design introduces a structured approach to building small and complex UI elements with reuse and organization in mind.  

What problems does it solve?
 	- currently one of the biggest issues we face is writing 'safe' CSS.  Our current structure is very loose and flexible which is great in theory but can, and is, easily abused (non-intentional).  This leads to naming conflicts and overly nested SASS.

How does atomic design address this issue?
	- Atomic design introduces layers of separation from within the UI components.  Atomic design addresses the architecture of the UI layers.  More on this...

Why Atomic design?
	- We found that the atomic design methodology was flexible but offered a clear distinction between layers.  We've decided to exploit some of its flexibility in the atom layers (see definitions for examples).  

Style Guide... notes

update 
- prefix to uppercase
- change folder directory see Chris's example


the following only covers atoms, molecules, and organisms.  Globals, resets, etc already exist in TP so there is no need at this point to factor that in.

Each layers naming becomes more specific to its use case as the component becomes more composed. Meaning there is less likelihood of naming collisions??

class names only, no id selectors


concepts
- each layer above the atom becomes progressively more about layout then styling.  As a lot of the styling comes from the lower layers.

- each atomic layer stores CSS files, each file should be named after its 'component' and each layer may find the need to have a dedicated CSS file named after the atomic layer, where base level styling occurs.  ?? Example

- the HTML comes with the CSS eliminating some risks, the CSS is owned by the HTML

General rules
- Each layer is prefixed (M-) with an uppercase letter describing the layer its in.  
- Each layer contains elements and its associated CSS

Atoms style rules
- Atoms are an element and should consist of only one tag in most cases. 

- the atom layer is typically singular like a button but could be composed of several singular atoms to reduce redundancies.

- all styles in this layer are prefixed with a-

- this layer should also contain base application styling, commonly reoccurring elements

- the rules in this layer are flexible, if you need a unique button and don't want to get there by using an existing atom due to complexity feel free and make a new element following the directory structure guidelines

- colors and other such styles should never be baked in, see enhancers.  One exception would be if the atom was specifically named and built to support this style, it has become so common that it is worth building a dedicated atom.


Molecules 
- molecule naming should become more specific describing what the molecule does
- molecules combine atoms to create a functional component such as a search box with label and button
- prefixed with m-
- the styles in this layer can enhance an atom by adding the necessary styles when properly prefixed (a-) and the style is placed with the other associated atoms styles??
- this layer should only be concerned with itself and its children this rule holds true for all layers
- In the above example, enhancements are made to atoms from within the molecule layer.  The molecule layer handles layout styles while the atom layer styles handle things like color and font size.  The prefixed styles are written in the appropriate files.


organisms
- are composed components and are very specific named
- prefixed with o-
- organisms are a finished product that can be 'picked up' and placed anywhere within the app and are not coupled to any other organism??


Directory Structure
- Following the atomic structure, each layer is responsible for both element and styles. Using atoms as an example we get
    atoms->styles
                ->elements


Style prefixing
- Each style applied by class name will be prefixed with the layer that the CSS can be found in, a style found in the atom layer will be prefixed with a- ie a-plainButton
- the purpose of prefixing is to enhance developer experience by making styles easily found as well as aiding in debugging CSS issues and namespacing.  


Enhancers
- the element followed by -- then the type of enhancer.  a-input--red,
a-commonButton--red, or m-workoutCard--compliantGreen
- each layer should contain a file for CSS enhancers ?? making them easier to find more reusable
- enhancers should also be used with hover states?? eliminating the need for additional hover state prefix

Visual Regression Testing
---
Visual regression testing takes a before and after snapshot and compares the two.  Visual regression testing helps solve a common and difficult scenario.  Reusable components save a lot of time, but what happens when the component doesn't quite fit the bill.  Going in and making changes seems like the obvious answer, but what happens when we don't realize that this component is used as is in another area. Now any changes we make could have a negative impact on other areas.  This where visual regression testing comes in.

Props and Styles
    - atom layer styles can be passed down from parent structures if properly prefixed, this style must live in the correct CSS file and layer.
    - className='b-textInput--removeOutline b-textInput--removeBorder' the class names are passed down from a parent and added to 
    but should never remove from the atom. 
    - The need to remove styles from an element ??

Js and Styles
    - 
