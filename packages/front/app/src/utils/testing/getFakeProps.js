import path from 'path'
import fakeProps from 'react-fake-props'

const getFakeProps = (dirPath, filePath) => (...componentNames) => {
  const compsPath = path.join(dirPath, `${filePath}.js`) // One level up
  const props = fakeProps(compsPath, {
    all: true // Get every exports
  }).reduce((acc, { displayName, props }) => {
    // Return an object to easily grab props and reorder them correctly as an array matching componentNames
    acc[displayName] = props
    return acc
  }, {})

  // Preserve the original order to enable array destructuring
  return componentNames.map(name => props[name])
}

export default getFakeProps
