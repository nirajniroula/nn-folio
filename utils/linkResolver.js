// Manages the url links to internal Prismic documents
// Expand this function as your website grows
const linkResolver = (doc) => {
  if (doc.type === "page" && doc.uid !== "home") {
    return `/${doc.uid}/`;
  }

  if (doc.type === "page") {
    return `/${doc.uid}`;
  }
  if (doc.type === "tools") {
    return `/tools/${doc.uid}`;
  }
  if (doc.type === "project_details") {
    return `/project/${doc.uid}`;
  }

  return "/";
};

export default linkResolver;
