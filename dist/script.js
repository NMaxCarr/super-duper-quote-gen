import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as React from "https://cdn.skypack.dev/react@17.0.1";

const QUOTESLIST = [
{ quote: "Maple Syrup is tasty", author: "WiseCanadian" },
{ quote: "Maple Syrup is sticky", author: "StupidCanadian" },
{ quote: "Maple Syrup is ugly", author: "RedneckCanadian" }];


const QuoteText = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-text" }, /*#__PURE__*/
    React.createElement("span", { id: "text" }, props.text)));


};

const QuoteAuthor = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-author" }, /*#__PURE__*/
    React.createElement("span", { id: "author" }, "- ", props.author)));


};

const QuoteBoxBottom = props => {
  return /*#__PURE__*/(
    React.createElement("div", { class: "buttons" }, /*#__PURE__*/
    React.createElement("a", { class: "button", id: "tweet-quote", title: "Tweet this quote!", target: "_top", href: "https://twitter.com/intent/tweet" }, "Tweet"), /*#__PURE__*/


    React.createElement("button", { id: "new-quote", onClick: props.newQuote }, "New Quote")));


};

const App = () => {
  const [quote, setQuote] = React.useState(QUOTESLIST[0]);
  const handleOnClick = () => {
    const rnd = Math.floor(Math.random() * 3);
    setQuote(QUOTESLIST[rnd]);
  };
  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
    React.createElement(QuoteText, { text: quote.quote }), /*#__PURE__*/
    React.createElement(QuoteAuthor, { author: quote.author }), /*#__PURE__*/
    React.createElement(QuoteBoxBottom, { newQuote: handleOnClick })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("wrapper"));