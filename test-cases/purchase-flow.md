# Test Cases – Purchase Flow

---

## Test Case 1: Successful Purchase

**Test Case ID:** TC_PUR_001  
**Precondition:** User has items available in system  

### Steps:
1. Add item to cart
2. Proceed to checkout
3. Enter valid payment details
4. Confirm payment

### Expected Result:
- Payment is successful
- Receipt is generated
- Order is completed

---

## Test Case 2: Verify Tax Calculation

**Test Case ID:** TC_PUR_002  
**Precondition:** Item has predefined price and tax rate  

### Steps:
1. Add item to cart
2. Proceed to checkout
3. Observe total amount

### Expected Result:
- Tax is correctly applied
- Final total matches expected calculation

---

## Test Case 3: Payment Failure Handling

**Test Case ID:** TC_PUR_003  
**Precondition:** Payment system available  

### Steps:
1. Add item to cart
2. Proceed to checkout
3. Enter invalid payment details
4. Confirm payment

### Expected Result:
- Payment is declined
- Error message is displayed
- User can retry payment

---

## Test Case 4: Empty Cart Checkout

**Test Case ID:** TC_PUR_004  
**Precondition:** No items in cart  

### Steps:
1. Go to checkout without adding items

### Expected Result:
- System prevents checkout
- Appropriate message is shown

---

## Test Case 5: Receipt Validation

**Test Case ID:** TC_PUR_005  
**Precondition:** Successful purchase completed  

### Steps:
1. Complete a purchase
2. View receipt

### Expected Result:
- Receipt contains correct item details
- Price, tax, and total are accurate
