# Test Cases – Return / Refund Flow

---

## Test Case 1: Successful Return with Valid Receipt

**Test Case ID:** TC_RET_001  
**Precondition:** A completed purchase exists with a valid receipt number  

### Steps:
1. Open the return section
2. Enter a valid receipt number
3. Retrieve the original transaction
4. Select the item to return
5. Confirm the return request

### Expected Result:
- Original transaction is found
- Selected item is eligible for return
- Refund is processed successfully
- Return confirmation is displayed

---

## Test Case 2: Return with Invalid Receipt

**Test Case ID:** TC_RET_002  
**Precondition:** User has an invalid or non-existing receipt number  

### Steps:
1. Open the return section
2. Enter an invalid receipt number
3. Submit the lookup request

### Expected Result:
- System does not find the transaction
- Error message is displayed
- Refund is not processed

---

## Test Case 3: Partial Return from a Multi-Item Transaction

**Test Case ID:** TC_RET_003  
**Precondition:** A completed purchase exists with multiple items on one receipt  

### Steps:
1. Open the return section
2. Enter a valid receipt number
3. Retrieve the transaction
4. Select only one item from the transaction
5. Confirm the return

### Expected Result:
- Only the selected item is returned
- Refund amount matches the selected item
- Remaining items stay unchanged in the original transaction record

---

## Test Case 4: Refund Amount Validation

**Test Case ID:** TC_RET_004  
**Precondition:** A completed purchase exists with a known item price  

### Steps:
1. Open the return section
2. Enter a valid receipt number
3. Select the purchased item
4. Process the refund

### Expected Result:
- Refund amount matches the original paid amount for that item
- No extra or missing refund amount is applied

---

## Test Case 5: Return Attempt Without Receipt

**Test Case ID:** TC_RET_005  
**Precondition:** No receipt number is provided  

### Steps:
1. Open the return section
2. Leave the receipt field blank
3. Submit the request

### Expected Result:
- System prevents the return lookup
- Validation message is displayed asking for receipt information
