# Bug Report – Payment Failure Not Handled Properly

---

## Bug ID
BUG_001

---

## Title
Payment failure does not display error message to user

---

## Environment
- Browser: Chrome (latest)
- OS: macOS

---

## Preconditions
- User has items in cart
- Checkout page is accessible

---

## Steps to Reproduce
1. Add item to cart
2. Proceed to checkout
3. Enter invalid payment details
4. Click on "Pay Now"

---

## Expected Result
- Payment should fail
- System should display an appropriate error message
- User should be allowed to retry payment

---

## Actual Result
- Payment fails silently
- No error message is displayed
- User is not informed about failure

---

## Severity
High

---

## Priority
High

---

## Impact
User cannot understand why payment failed, leading to confusion and potential loss of transaction

---

## Status
Open
