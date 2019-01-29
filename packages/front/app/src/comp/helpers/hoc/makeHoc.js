import getDisplayName from 'react-display-name'

const makeHoc = (name, hocMaker) => ComponentToWrap => {
  const WrappedComponent = hocMaker(ComponentToWrap)
  WrappedComponent.displayName = `${name}(${getDisplayName(ComponentToWrap)})`

  return WrappedComponent
}

export default makeHoc
