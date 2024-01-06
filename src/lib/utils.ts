const routingPaths = /^\/(asked\/.*|board(\/.*)?|verify|fight\/.*)$/;

export const CheckRouting = (path: string[]): boolean => {
  const routingpath = "/" + path.join("/");
  if (routingPaths.test(routingpath)) return true;
  return false;
};
