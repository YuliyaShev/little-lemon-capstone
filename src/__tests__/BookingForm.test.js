import { render, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";

test("renders BookingForm button", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();

  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatchOnDateChange={mockDispatch}
    />
  );

  const button = screen.getByText(/make your reservation/i);
  expect(button).toBeInTheDocument();
});
