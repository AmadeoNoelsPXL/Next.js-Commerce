import { Button, render } from "@shopify/checkout-ui-extensions-react";

render("Checkout::Dynamic::Render", () => <Checkout />);

function Checkout() {
  return <Button> Pay now </Button>;
}
