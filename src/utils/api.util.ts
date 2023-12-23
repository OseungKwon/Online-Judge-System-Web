const REPLACE_STR = '#{var}';

function ApiFormatter(path: string, ...args: any) {
  let formatPath = path;
  for (let index = 0; index < args.length; index++) {
    formatPath = formatPath.replace(REPLACE_STR, args[index]);
  }

  const removeReplaceStrUrl = formatPath.replace(/\/#{var}/gi, '');

  if (removeReplaceStrUrl.lastIndexOf('/') === removeReplaceStrUrl.length - 1) {
    return removeReplaceStrUrl.substring(0, removeReplaceStrUrl.length - 1);
  } else {
    return removeReplaceStrUrl;
  }
}

export { ApiFormatter };
