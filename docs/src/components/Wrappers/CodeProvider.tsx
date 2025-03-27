import { createContext, useContext, useState } from 'react';

const CodeContext = createContext({
  code: {},
  setCode: (_: { [sectionName: string]: string }) => {},
});

export const CodeProvider = ({ children }: { children: any }) => {
  const [code, setCode] = useState<{ [sectionName: string]: string }>({});

  function handleSetCode(classObj: { [sectionName: string]: string }) {
    setCode({ ...code, ...classObj });
  }

  return (
    <CodeContext.Provider value={{ code, setCode: handleSetCode }}>{children}</CodeContext.Provider>
  );
};

export const useCode = () => {
  const context = useContext(CodeContext);
  if (!context) {
    throw new Error('useCode must be used within a CodeProvider');
  }
  return context;
};
