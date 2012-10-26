        var ArComputeSoundex = function(word, length){ 
            // Value to return
            var value = "";

            switch (word[0]){
				case 'A':
                    {
                        word = word.substring(1, word.length - 1);
                    }
                    break;
            }

            // Size of the word to process
            var size = word.length;
            // Make sure the word is at least two characters in length
            if (size > 1)
            {
                // Convert the word to character array for faster processing
                var chars = word.split('');
                // Buffer to build up with character codes
                var buffer = ''; //new StringBuilder(); buffer.Length = 0;
                // The current and previous character codes
                var prevCode = 0;
                var currCode = 0;
				
                buffer += ('x');
               
                // Loop through all the characters and convert them to the proper character code
                for (var i = 1; i < size; i++){
                    switch (chars[i]){
                         case 'ا':
						case 'أ':
						case 'إ':
						case 'آ':
						case 'ح':
						case 'خ':
						case 'ه':
						case 'ع':
						case 'غ':
						case 'ش':
						case 'و':
						case 'ي':
							currCode = 0;
							break;
						case 'ف':
						case 'ب':
							currCode = 1;
							break;
						
						case 'ج':
						case 'ز':
						case 'س':
						case 'ص':
						case 'ظ':
						case 'ق':
						case 'ك':
							currCode = 2;
							break;
						case 'ت':
						case 'ث':
						case 'د':
						case 'ذ':
						case 'ض':
						case 'ط':
							currCode = 3;
							break;
						case 'ل':
							currCode = 4;
							break;
						case 'م':
						case 'ن':
							currCode = 5;
							break;
						case 'ر':
							currCode = 6;
							break;
						case ' ': currCode = ' '; break;
						case '-': currCode = '-'; break;
					}

                    // Check to see if the current code is the same as the last one
                    if (currCode != prevCode){
                        // Check to see if the current code is 0 (a vowel); do not process vowels
                        if (currCode != 0 || typeof('currCode') == 'string')
                            buffer += (currCode);
                    }
                    // Set the new previous character code
                    prevCode = currCode;
                    // If the buffer size meets the length limit, then exit the loop
                    if (buffer.length == length)
                        break;
                }
                // Pad the buffer, if required
                //size = buffer.Length;
                while(buffer.length < length) //if (size < length)
                    buffer += '0'; //buffer.Append('0', (length - size));
                // Set the value to return
                value = buffer; //.ToString();
            }
            // Return the value
            return value;
        }
		
		//console.log( ArComputeSoundex(EnToAr('mrym'), 4) );
		console.log( ArComputeSoundex('مريم', 4) );
		
