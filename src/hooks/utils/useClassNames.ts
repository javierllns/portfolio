import classNames from "classnames/bind";

export const useClassNames = (styles: CSSModuleClasses) => {
  let cx = classNames.bind(styles);
  return cx;
};

export default useClassNames;
