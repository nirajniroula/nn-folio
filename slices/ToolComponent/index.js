import MockAPITool from "../../pages/tools/tool-components/MockAPITool";

/**
 * @typedef {import("@prismicio/client").Content.ToolComponentSlice} ToolComponentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ToolComponentSlice>} ToolComponentProps
 * @param {ToolComponentProps}
 */
const ToolComponent = ({ slice }) => {
  switch (slice.primary.name) {
    case "mock-api":
      return (
        <MockAPITool
          title={slice.primary.title}
          description={slice.primary.description}
        />
      );

    default:
      return <></>; // Handle unknown slice types
  }
};

export default ToolComponent;
