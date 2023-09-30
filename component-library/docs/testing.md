# 🧪 Testing

This [tweet](https://twitter.com/rauchg/status/807626710350839808) explains in a concise way how to think about testing. You will get the most benefit from having integration and e2e tests. Unit tests are fine, but they will not give you as much confidence that your application is working as integration tests do.

## Types of tests:

### Unit Tests

Unit testing, as the naming already reveals is a type of testing where units of an application are being tested in isolation.
You should write unit tests for shared components and functions that are used throughout the entire application as they might be used in different scenarios which might be difficult to reproduce in integration tests.

```typescript
import { rtlRender, screen, userEvent, waitFor } from '@/test/test-utils';

import { Button } from '../../Button';
import { ConfirmationDialog } from '../ConfirmationDialog';

test('should handle confirmation flow', async () => {
  const titleText = 'Are you sure?';
  const bodyText = 'Are you sure you want to delete this item?';
  const confirmationButtonText = 'Confirm';
  const openButtonText = 'Open';

  await rtlRender(
    <ConfirmationDialog
      icon="danger"
      title={titleText}
      body={bodyText}
      confirmButton={<Button>{confirmationButtonText}</Button>}
      triggerButton={<Button>{openButtonText}</Button>}
    />,
  );

  expect(screen.queryByText(titleText)).not.toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: openButtonText }));

  expect(screen.getByText(titleText)).toBeInTheDocument();

  expect(screen.getByText(bodyText)).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: 'Cancel' }));

  await waitFor(() =>
    expect(screen.queryByText(titleText)).not.toBeInTheDocument(),
  );

  expect(screen.queryByText(bodyText)).not.toBeInTheDocument();
});
```

### Integration Tests

Integration testing is a method of testing multiple parts of an application at once.
Most of your tests should be integration tests, as these will give you the most benefits and confidence for your invested effort. Unit tests on their own don't guarantee that your app will work even if those tests pass, because the relationship between the units might be wrong. You should test different features with integration tests.

```typescript
import { useParams as useMockParams } from 'react-router-dom';

import {
  render,
  screen,
  userEvent,
  waitFor,
  createDiscussion,
  createUser,
  within,
} from '@/test/test-utils';

import { Discussion } from '../Discussion';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // keep the rest of the exports intact
  useParams: jest.fn(),
}));

const renderDiscussion = async () => {
  const fakeUser = await createUser();
  const fakeDiscussion = await createDiscussion({ teamId: fakeUser.teamId });

  (useMockParams as jest.Mock).mockImplementation(() => ({
    discussionId: fakeDiscussion.id,
  }));

  const utils = await render(<Discussion />, {
    user: fakeUser,
  });

  await screen.findByText(fakeDiscussion.title);

  return {
    ...utils,
    fakeUser,
    fakeDiscussion,
  };
};

test('should render discussion', async () => {
  const { fakeDiscussion } = await renderDiscussion();
  expect(screen.getByText(fakeDiscussion.body)).toBeInTheDocument();
});

test('should update discussion', async () => {
  const { fakeDiscussion } = await renderDiscussion();

  const titleUpdate = '-Updated';
  const bodyUpdate = '-Updated';

  userEvent.click(screen.getByRole('button', { name: /update discussion/i }));

  const drawer = screen.getByRole('dialog', {
    name: /update discussion/i,
  });

  const titleField = within(drawer).getByText(/title/i);
  const bodyField = within(drawer).getByText(/body/i);

  userEvent.type(titleField, titleUpdate);
  userEvent.type(bodyField, bodyUpdate);

  const submitButton = within(drawer).getByRole('button', {
    name: /submit/i,
  });

  userEvent.click(submitButton);

  await waitFor(() => expect(drawer).not.toBeInTheDocument());

  const newTitle = `${fakeDiscussion.title}${titleUpdate}`;
  const newBody = `${fakeDiscussion.body}${bodyUpdate}`;

  expect(screen.getByText(newTitle)).toBeInTheDocument();
  expect(screen.getByText(newBody)).toBeInTheDocument();
});

test('should create and delete a comment on the discussion', async () => {
  await renderDiscussion();

  const comment = 'Hello World';

  userEvent.click(screen.getByRole('button', { name: /create comment/i }));

  const drawer = screen.getByRole('dialog', {
    name: /create comment/i,
  });

  const bodyField = within(drawer).getByText(/body/i);

  userEvent.type(bodyField, comment);

  const submitButton = within(drawer).getByRole('button', {
    name: /submit/i,
  });

  userEvent.click(submitButton);

  await waitFor(() => expect(drawer).not.toBeInTheDocument());

  const commentsList = screen.getByRole('list', {
    name: 'comments',
  });

  const commentElements = within(commentsList).getAllByRole('listitem');

  const commentElement = commentElements[0];

  expect(commentElement).toBeInTheDocument();

  const deleteCommentButton = within(commentElement).getByRole('button', {
    name: /delete comment/i,
    exact: false,
  });

  userEvent.click(deleteCommentButton);

  const confirmationDialog = screen.getByRole('dialog', {
    name: /delete comment/i,
  });

  const confirmationDeleteButton = within(confirmationDialog).getByRole(
    'button',
    {
      name: /delete/i,
    },
  );

  userEvent.click(confirmationDeleteButton);

  await screen.findByText(/comment deleted/i);

  expect(within(commentsList).queryByText(comment)).not.toBeInTheDocument();
});
```

### E2E

End-To-End Testing is a testing method where an application is tested as a complete entity.
Usually these tests consist of running the entire application with the frontend and the backend in an automated way and verifying that the entire system works. It is usually written in the way the application should be used by the user.

```typescript
import {
  userGenerator,
  discussionGenerator,
  commentGenerator,
} from '../../src/test/data-generators';

describe('smoke', () => {
  it('should handle normal app flow', () => {
    const user = userGenerator();

    const discussion = discussionGenerator();

    // registration:
    cy.visit('http://localhost:3000/auth/register');

    cy.findByRole('textbox', {
      name: /first name/i,
    }).type(user.firstName);
    cy.findByRole('textbox', {
      name: /last name/i,
    }).type(user.lastName);
    cy.findByRole('textbox', {
      name: /email address/i,
    }).type(user.email);
    cy.findByLabelText(/password/i).type(user.password);

    cy.findByRole('textbox', {
      name: /team name/i,
    }).type(user.teamName);

    cy.findByRole('button', {
      name: /register/i,
    }).click();

    cy.findByRole('heading', {
      name: `Welcome ${user.firstName} ${user.lastName}`,
    }).should('exist');

    // log out:
    cy.findByRole('button', {
      name: /open user menu/i,
    }).click();

    cy.findByRole('menuitem', {
      name: /sign out/i,
    }).click();

    // log in:
    cy.visit('http://localhost:3000/auth/login');

    cy.findByRole('textbox', {
      name: /email address/i,
    }).type(user.email);
    cy.findByLabelText(/password/i).type(user.password);

    cy.findByRole('button', {
      name: /log in/i,
    }).click();

    cy.findByRole('heading', {
      name: `Welcome ${user.firstName} ${user.lastName}`,
    }).should('exist');

    cy.findByRole('link', {
      name: /discussions/i,
    }).click();

    // create discussion:
    cy.findByRole('button', {
      name: /create discussion/i,
    }).click();

    cy.findByRole('dialog').within(() => {
      cy.findByRole('textbox', {
        name: /title/i,
      }).type(discussion.title);
      cy.findByRole('textbox', {
        name: /body/i,
      }).type(discussion.body);
      cy.findByRole('button', {
        name: /submit/i,
      }).click();
    });

    cy.checkAndDismissNotification(/discussion created/i);

    cy.findByRole('dialog').should('not.exist');

    cy.wait(200);

    // visit discussion page:
    cy.findByRole('link', {
      name: /view/i,
    }).click();

    cy.findByRole('heading', {
      name: discussion.title,
    }).should('exist');

    // update discussion:
    cy.findByRole('button', {
      name: /update discussion/i,
    }).click();

    const updatedDiscussion = discussionGenerator();

    cy.findByRole('dialog').within(() => {
      cy.findByRole('textbox', {
        name: /title/i,
      })
        .clear()
        .type(updatedDiscussion.title);
      cy.findByRole('textbox', {
        name: /body/i,
      })
        .clear()
        .type(updatedDiscussion.body);
      cy.findByRole('button', {
        name: /submit/i,
      }).click();
    });

    cy.checkAndDismissNotification(/discussion updated/i);

    cy.findByRole('heading', {
      name: updatedDiscussion.title,
    }).should('exist');

    // create comment:
    const comment = commentGenerator();

    cy.findByRole('button', {
      name: /create comment/i,
    }).click();

    cy.findByRole('dialog').within(() => {
      cy.findByRole('textbox', {
        name: /body/i,
      }).type(comment.body, { force: true }); // for some reason it requires force to be set to true

      cy.findByRole('button', {
        name: /submit/i,
      }).click();
    });

    cy.checkAndDismissNotification(/comment created/i);

    cy.findByRole('list', {
      name: 'comments',
    }).within(() => {
      cy.findByText(comment.body).should('exist');
    });

    cy.wait(200);

    // delete comment:
    cy.findByRole('list', {
      name: 'comments',
    }).within(() => {
      cy.findByRole('listitem', {
        name: `comment-${comment.body}-0`,
      }).within(() => {
        cy.findByRole('button', {
          name: /delete comment/i,
        }).click();
      });
    });

    cy.findByRole('dialog').within(() => {
      cy.findByRole('button', {
        name: /delete comment/i,
      }).click();
    });

    cy.wait(200);

    cy.checkAndDismissNotification(/comment deleted/i);

    cy.findByRole('list', {
      name: 'comments',
    }).within(() => {
      cy.findByText(comment.body).should('not.exist');
    });

    // go back to discussions list:
    cy.findByRole('link', {
      name: /discussions/i,
    }).click();

    cy.wait(200);

    // delete discussion:
    cy.findByRole('button', {
      name: /delete discussion/i,
    }).click();

    cy.findByRole('dialog').within(() => {
      cy.findByRole('button', {
        name: /delete discussion/i,
      }).click();
    });

    cy.checkAndDismissNotification(/discussion deleted/i);

    cy.wait(200);

    cy.findByRole('cell', {
      name: updatedDiscussion.title,
    }).should('not.exist');
  });
});
```

## Tooling:

#### [Jest](https://jestjs.io/)

Jest is a fully featured testing framework and is de-facto standard when it comes to testing JavaScript applications. It is very flexible and configurable to test both frontends and backends.

#### [Testing Library](https://testing-library.com/)

Testing library is a set of libraries and tools that makes testing easier than ever before. Its philosophy is to test your app in a way it is being used by a real world user instead of testing implementation details. For example, don't test what is the current state value in a component, but test what that component renders on the screen for its user. If you refactor your app to use a different state management solution, the tests will still be relevant as the actual component output to the user didn't change.

#### [Cypress](https://www.cypress.io/)

Cypress is a tool for running e2e tests in an automated way.
You define all the commands a real world user would execute when using the app and then start the test. It can be started in 2 modes:

- Browser mode - it will open a dedicated browser and run your application from start to finish. You get a nice set of tools to visualize and inspect your application on each step. Since this is a more expensive option, you want to run it only locally when developing the application.
- Headless mode - it will start a headless browser and run your application. Very useful for integrating with CI/CD to run it on every deploy.

It is very configurable with plugins and commands. You can even pair it with [Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/) which is makes your tests even easier to write.

You can also write custom commands to abstract some common tasks.

```typescript
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('checkAndDismissNotification', (matcher) => {
  cy.findByRole('alert', {
    name: matcher,
  }).within(() => {
    cy.findByText(matcher).should('exist');
    cy.findByRole('button').click();
  });
});
```

#### [MSW](https://mswjs.io)

For prototyping the API use msw, which is a great tool for quickly creating frontends without worrying about servers. It is not an actual backend, but a mocked server inside a service worker that intercepts all HTTP requests and returns desired responses based on the handlers you define. This is especially useful if you only have access to the frontend and are blocked by some not implemented features on the backend. This way, you will not be forced to wait for the feature to be completed or hardcode response data in the code, but use actual HTTP calls to build frontend features.

It can be used for designing API endpoints. The business logic of the mocked API can be created in its handlers.

[API Handlers Example Code](../src/test/server/handlers/auth.ts)

```typescript
import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { API_URL } from '@/config';

import { db, persistDb } from '../db';
import { authenticate, delayedResponse, hash, requireAuth } from '../utils';

type RegisterBody = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  teamId?: string;
  teamName?: string;
};

type LoginBody = {
  email: string;
  password: string;
};

export const authHandlers = [
  rest.post<RegisterBody>(`${API_URL}/auth/register`, (req, res, ctx) => {
    try {
      const userObject = req.body;

      const existingUser = db.user.findFirst({
        where: {
          email: {
            equals: userObject.email,
          },
        },
      });

      if (existingUser) {
        throw new Error('The user already exists');
      }

      let teamId;
      let role;

      if (!userObject.teamId) {
        const team = db.team.create({
          id: nanoid(),
          name: userObject.teamName ?? `${userObject.firstName} Team`,
          createdAt: Date.now(),
        });
        persistDb('team');
        teamId = team.id;
        role = 'ADMIN';
      } else {
        const existingTeam = db.team.findFirst({
          where: {
            id: {
              equals: userObject.teamId,
            },
          },
        });

        if (!existingTeam) {
          throw new Error('The team you are trying to join does not exist!');
        }
        teamId = userObject.teamId;
        role = 'USER';
      }

      db.user.create({
        ...userObject,
        id: nanoid(),
        createdAt: Date.now(),
        role,
        password: hash(userObject.password),
        teamId,
      });

      persistDb('user');

      const result = authenticate({
        email: userObject.email,
        password: userObject.password,
      });

      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' }),
      );
    }
  }),

  rest.post<LoginBody>(`${API_URL}/auth/login`, (req, res, ctx) => {
    try {
      const credentials = req.body;
      const result = authenticate(credentials);
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' }),
      );
    }
  }),

  rest.get(`${API_URL}/auth/me`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);

      return delayedResponse(ctx.json(user));
    } catch (error: any) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' }),
      );
    }
  }),
];
```

[Data Models Example Code](../src/test/server/db.ts)

```typescript
import { factory, primaryKey } from '@mswjs/data';

const models = {
  user: {
    id: primaryKey(String),
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    teamId: String,
    role: String,
    bio: String,
    createdAt: Number,
  },
  team: {
    id: primaryKey(String),
    name: String,
    description: String,
    createdAt: Number,
  },
  discussion: {
    id: primaryKey(String),
    title: String,
    body: String,
    teamId: String,
    createdAt: Number,
  },
  comment: {
    id: primaryKey(String),
    body: String,
    authorId: String,
    discussionId: String,
    createdAt: Number,
  },
};

export const db = factory(models);

export type Model = keyof typeof db;

export const loadDb = () =>
  Object.assign(JSON.parse(window.localStorage.getItem('msw-db') || '{}'));

export const persistDb = (model: Model) => {
  if (process.env.NODE_ENV === 'test') return;
  const data = loadDb();
  data[model] = db[model].getAll();
  window.localStorage.setItem('msw-db', JSON.stringify(data));
};

export const initializeDb = () => {
  const database = loadDb();
  Object.entries(db).forEach(([key, model]) => {
    const dataEntres = database[key];
    if (dataEntres) {
      dataEntres?.forEach((entry: Record<string, any>) => {
        model.create(entry);
      });
    }
  });
};

export const resetDb = () => {
  window.localStorage.clear();
};

initializeDb();
```

Having fully functional mocked API server also handy when it comes to testing, you don't have to mock fetch, but make requests to the mocked server instead with the data your application would expect.
