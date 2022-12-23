// import { render, screen } from "@testing-library/react";

// import Card from "./Card.jsx";

// const testData = {
//   image: "https://images.punkapi.com/v2/keg.png",
//   name: "Buzz",
//   description:
//     "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once....",
//   firstBrewed: "09/2007",
//   ph: "4.4",
//   abv: "4.5%",
// };

// describe("Testing <Card/>", () => {
//   it("should display given props", () => {
//     render(
//       <Card
//         image={testData}
//         name={testData}
//         description={testData}
//         firstBrewed={testData}
//         ph={testData}
//         abv={testData}
//       />
//     );

//     const name = screen.getByRole("name", { name: /buzz/i });

//     const description = screen.getByRole("heading", {
//       name: /a light, crisp and bitter ipa brewed with english and american hops\. a small batch brewed only once\.\.\.\./i,
//     });

//     const firstBrewed = screen.getByRole("heading", {
//       name: /first brewed \- 09\/2007/i,
//     });

//     expect(name).toBeInTheDocument();
//     expect(description).toBeInTheDocument();
//     expect(firstBrewed).toBeInTheDocument();
//   });
// });
