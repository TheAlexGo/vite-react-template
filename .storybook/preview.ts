import '../src/styles/common.styl';

export const parameters = {
    actions: {
        argTypesRegex: '^on[A-Z].*'
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        },
        expanded: true
    }
};

export const decorators = [];
