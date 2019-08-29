
var mario = new Vue({
    
    el: 'main',
    data: function() {
        return {
           
            heightStr: '5',
            height: 5,
            
        };
    },
    computed: {
        rows: function() {  
    
            return this.pyramidRows(this.height);
      
        },
        
        error: function() {
            return this.checkForErrors(this.heightStr);
            
        }
        
    },

    
    methods: {
        
        clearAndRedraw(evt) {
            // Stop the form from causing a page refresh.
            evt.preventDefault();

            if (this.error) {
                // Stop drawing, we've got errors.
                return;
            }

            this.height = parseInt(this.heightStr);
            var pyramid = document.querySelector('#pyramid');
            pyramid.innerHTML = '';
            
            var rows = this.rows; // TODO 5: Use this.rows instead (the computed property you just made)
            for (var ix = 0; ix < rows.length; ix++) {
                
                var row = document.createElement('p');
                row.innerHTML = rows[ix];
                pyramid.appendChild(row);
                
            }
            
           
        },
        
        checkForErrors(heightStr) {
            if (heightStr == "" || isNaN(heightStr) || heightStr < 1 || heightStr > 100) {
                let error = (heightStr + ": That's not a valid height.");
                return error;
            } else {
                return null;
            
            }
        },
        pyramidRows(height) {

            var rowStrings = [];
            // for each row....
            for (var row = 0; row < height; row++) {
        
                // figure out number of bricks and spaces
                var numBricks = row + 2;
                var numSpaces = height - row - 1;
        
                // build up a string for this row
                var rowStr = "";
                for (var i = 0; i < numSpaces; i++) {
                    var spaceChar = "&nbsp";
                    rowStr += spaceChar;
                }
                for (var i = 0; i < numBricks; i++) {
                    rowStr += "#";
                }
        
                rowStrings.push(rowStr);
            }
            return rowStrings;
        },


    }  
});





