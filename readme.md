## About Text Input Date (ver 1.0.0)
Tool convert input text to date input

# Required: jQuery

# Use: (view <a href="#example-tag-text-date">example</a>)

$(input).toTextDate();

or

$(input).toTextDate(<a href="#tag-config-detail">config</a>);

<div id="tag-config-detail">
    config: {
        classInputDate: class name for input date,
        classInputMonth: class name for input month,
        classInputYear: class name for input year,
        symbol: symbol show between element, eg: "/","-"
    }
</div>

# Example:

<div id="example-tag-text-date">
     <input type="text" class="date" id="input">
     <script>
          $('input.date').toTextDate();
     </script>
</div>