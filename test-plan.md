# Test Plan – Retail POS System

---

## 1. Objective
The objective of this test plan is to validate the functionality, reliability, and accuracy of key workflows in a retail Point-of-Sale (POS) system, including purchases, returns, and price adjustments.

---

## 2. Scope

### In Scope
- Purchase transactions
- Return and refund processing
- Price adjustments and discounts
- Basic error handling scenarios

### Out of Scope
- Performance testing
- Security testing
- Hardware/device-level testing

---

## 3. Test Strategy

### Testing Types
- Functional Testing
- Regression Testing (basic level)
- Negative Testing

### Testing Approach
- Manual testing for all workflows
- Automation testing for critical flows (checkout, error handling)
- API testing using Postman

---

## 4. Test Scenarios

### Purchase Flow
- Successful purchase with valid payment
- Tax calculation validation
- Receipt generation verification

### Return Flow
- Successful return with valid receipt
- Invalid receipt handling
- Refund processing validation

### Price Adjustment
- Applying discount correctly
- Updating item price
- Validating final total

---

## 5. Test Environment
- Browser: Chrome (latest version)
- OS: macOS
- Tools:
  - Playwright
  - Postman
  - GitHub

---

## 6. Test Data
- Sample product IDs
- Valid and invalid receipt numbers
- Payment scenarios (success/failure)

---

## 7. Entry Criteria
- Test cases are written and reviewed
- Test environment is available

---

## 8. Exit Criteria
- All critical test cases executed
- Major defects identified and documented

---

## 9. Risks and Mitigation

### Risks
- Incomplete test coverage
- Limited test data

### Mitigation
- Focus on high-priority workflows
- Use realistic scenarios

---

## 10. Deliverables
- Test Plan
- Test Cases
- Bug Reports
- Automation Scripts (basic)
