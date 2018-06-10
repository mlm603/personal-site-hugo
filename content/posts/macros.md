---
title: "Must-Have Macros"
date: 2016-10-25
tags: ["excel"]
description: "Handy macros for Excel power users"
---

<p>As someone who works with Excel all day, I've found that there are a few macros that make my life and the lives of those who have to view my documents much better. Specifically, making sheets "VeryHidden" (can't be unhidden just by right clicking on a tab) has proven to be a great tactic for discouraging nosy recipients from poking around in data they shouldn't see and creating a cleaner looking file.</p>
</br>
<p>Below are a few macros that I keep in my PERSONAL.xlsb file for easy access. Storing in PERSONAL.xlsb means the macros can be accessed from the "Macros" button on the Developer tab in any file. For instructions on using the PERSONAL.xlsb file see <a href="https://support.office.com/en-us/article/Copy-your-macros-to-a-Personal-Macro-Workbook-aa439b90-f836-4381-97f0-6e4c3f5ee566?ui=en-US&rs=en-US&ad=US" target="_blank">this article</a> from Microsoft.</p>
</br>
<p>The veryHiddenCurSheet macro will make the sheet you are currently on VeryHidden. If you are working with sensitive source data that needs to remain in the file to be referenced on other tabs, using this macro to hide your data is a good option. Note that this will not prevent users from pulling fields from the source data into any visible Pivot Tables.</p>
```
Sub veryHiddenCurSheet()
    ActiveSheet.Visible=xlVeryHidden
End Sub
```
</br>
<p>The unhideSpecifiedVHsheet macro will unhide the sheet with the name that you input into a pop-up prompt, whether that sheet is hidden or VeryHidden.</p>
```
Sub unhideSpecifiedVHsheet()
    sheetName=InputBox("what is the name of the sheet to unhide?")
    Sheets(sheetName).visible=xlSheetVisible
End Sub
```
</br>
<p>The unhideall macro is great for when you've been hiding tabs willy nilly and forgotten what tabs you hid or just want to see all of the tabs in a file. This will unhide both normal hidden and VeryHidden tabs.</p>
```
Sub unhideall()
    Dim ws as Worksheet
    For Each ws In ActiveWorkbook.Worksheets
        ws.Visible=xlSheetVisible
    Next ws
End Sub
```