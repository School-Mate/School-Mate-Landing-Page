const routingPaths = /^\/asked\/[a-zA-Z0-9-]+|^\/board(?:\/[a-zA-Z0-9-]+)*$/;

export const CheckRouting = (path: string[]): boolean => {
  const routingpath = "/" + path.join("/");

  if (routingPaths.test(routingpath)) return true;
  return false;
};
