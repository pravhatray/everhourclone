import { PopupModal } from "react-calendly";
import React from "react";
import { Button } from "@chakra-ui/react";

export default class CalendlyWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div>
        {/* <Button
        // onClick={Calendly.initPopupWidget({url:'https://calendly.com/vivekrana13420/30min'})}
          py="25px"
          width={["240px", "220px", "200px"]}
          colorScheme="green"
          size="md"
        >
          Schedule Time
        </Button> */}
        <Button
          width={["240px", "220px", "200px"]}
          py="25px"
          size="md"
          colorScheme="green"
          //   style={{ display: "block", margin: "0 auto" }}
          onClick={() => this.setState({ isOpen: true })}
        >
          Schedule Time
        </Button>
        <PopupModal
          url="https://calendly.com/vivekrana13420/30min"
          pageSettings={this.props.pageSettings}
          utm={this.props.utm}
          prefill={this.props.prefill}
          onModalClose={() => this.setState({ isOpen: false })}
          open={this.state.isOpen}
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
        />
      </div>
    );
  }
}

// import React from "react";

// import { PopupButton } from "react-calendly";

// const CalendlyWidget = () => {
//   return (
//     <div>
//       <PopupButton
//         url="https://calendly.com/vivekrana13420/30min"
//         /*
//          * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
//          * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
//          */
//         rootElement={document.getElementById("root")}
//         text="Click here to schedule!"
//       />
//     </div>
//   );
// };

// export default CalendlyWidget;
