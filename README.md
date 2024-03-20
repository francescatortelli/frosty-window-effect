# frosty-window-effect

A CSS-in-JS library for React applications that enables you to apply a beautiful frosty glass effect to your components
with ease. This library utilizes `styled-components` to provide a global style injection that can be customized to fit
your design needs.

## Installation

First, ensure you have `styled-components` installed in your project. If not, you can add it with npm:

```bash
npm install styled-components
```

Then, install `frosty-window-effect`:

```bash
npm install frosty-window-effect
```

## Usage

To use the frosty effect in your application, follow these steps:

1. Import `FrostyWindowEffect` from the library.
2. Use the `FrostyWindowEffect` styled component to wrap your application or components.
3. Apply the `frosty` class to any element you want to add the effect to.

### Example

Here's a quick example to get you started:

```jsx
import React from 'react';
import { FrostyWindowEffect } from 'frosty-window-effect';

function App () {
  return (
    <>
      <FrostyWindowEffect/>
      <div className="frosty">
        This div will have a frosty glass effect!
      </div>
    </>
  );
}

export default App;
```

## Customizing the Effect

As of now, the frosty effect is applied with fixed styles. To customize these styles, you would need to adjust the CSS
directly in the library's source code. Future versions may support customizable options.

## Contributing

Contributions are welcome! If you have ideas on how to improve `frosty-window-effect` or add new features, please feel
free to contribute. You can do so by:

1. Forking the repository.
2. Creating a new branch for your feature or fix.
3. Making your changes.
4. Submitting a pull request.

We look forward to seeing your contributions and suggestions!

## License

`frosty-window-effect` is released under the MIT license. See the LICENSE file for more details.
