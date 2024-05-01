import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';

test('should render the H1 element with the correct text', () => {
  // Arrange
  const expectedText = 'Final Project';

  // Act
  render(<Header />);

  // Assert
  const h1Element = screen.getByText(expectedText);
  expect(h1Element).toBeInTheDocument();
});

/*
TESTS
MAIN PAGE
Displays a Header
    HEADER 
    Displays Logo
        LOGO
        Is an image
    Displays a Menu
        MENU (3 ROUTES)
        1. Displays a link to the main page
        2. Displays a link to New Project form page
        3. 
Displays a search bar
    SEARCH BAR 
    Displays an input field
    Displays a "search" button
Displays a project List
    PROJECT LIST
    Displays project cards
        PROJECT CARDS
        Display a project image
        Display a project title
        Is a link to more Project info
        Displays a delete button
    Displays a "view more" button

PROJECT CARD (FORM)
Displays an image of the project
Displays the title of the project (input)
Displays the name of the pattern (input)
Displays the name of the designer (input)
Displays a link to the pattern (input)
Displays a yarn section
    dropdown for weight
    button to add another dropdown
Displays a needle section
    dropdown for size
    button to add another dropdown
Displays the type of craft (select: knitting or crochet)
Displays the size being made (input)
Displays the status of the project (select: Not started, in progress, finished) 
    input selection changes color of box
Displays Where the project is located (input)
Displays a text field for notes (optional)
Displays a save/edit button (necessary?)
Displays a delete button


Stretch goals
Start with knitting/crochet. Expand to other crafts in future
Tap and hold to rearrange priority
Tools Page
Form to add new needles/hooks on Tools page
Yarn Page
Form to add Yarn on Yarn page
*/