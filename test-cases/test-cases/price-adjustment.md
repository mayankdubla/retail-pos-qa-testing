# Test Cases – Price Adjustment Flow

---

## Test Case 1: Apply Discount Successfully

**Test Case ID:** TC_ADJ_001  
**Precondition:** Item is available with a known price  

### Steps:
1. Add item to cart
2. Apply a valid discount code
3. Proceed to checkout

### Expected Result:
- Discount is applied correctly
- Final price reflects the discount
- No calculation errors

---

## Test Case 2: Invalid Discount Code

**Test Case ID:** TC_ADJ_002  
**Precondition:** Item added to cart  

### Steps:
1. Add item to cart
2. Enter an invalid discount code
3. Apply the discount

### Expected Result:
- Discount is not applied
- Error message is displayed
- Original price remains unchanged

---

## Test Case 3: Manual Price Override

**Test Case ID:** TC_ADJ_003  
**Precondition:** User has permission to modify price  

### Steps:
1. Add item to cart
2. Manually change item price
3. Proceed to checkout

### Expected Result:
- Updated price is reflected correctly
- System records the price change
- No calculation mismatch

---

## Test Case 4: Multiple Discounts Handling

**Test Case ID:** TC_ADJ_004  
**Precondition:** System supports discount rules  

### Steps:
1. Add item to cart
2. Apply first discount
3. Attempt to apply second discount

### Expected Result:
- System follows defined rules (either restrict or combine)
- No incorrect pricing occurs

---

## Test Case 5: Final Billing Validation

**Test Case ID:** TC_ADJ_005  
**Precondition:** Item with discount applied  

### Steps:
1. Add item to cart
2. Apply discount
3. Proceed to checkout
4. Review final bill

### Expected Result:
- Final total includes correct price, discount, and tax
- No discrepancy in billing
