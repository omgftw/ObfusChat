# ObfusChat

> A simple text obfuscator using a randomized rotation-based letter-substitution cipher.

>Functions:
>>obfuscate: obfuscates text based on an optional seed number  
>>obfusChat.obfuscate(input, [seed])
>
>>deobfuscate: alias for obfuscate  
>>obfusChat.deobfuscate(input, [seed])

>Usage:  
>>To obfuscate text:
>>```javascript
>>var optionalSeed = 1234;
>>var output = obfusChat.obfuscate("input text", optionalSeed);
>>//output is "~^)3@C'bMp"
>>```
>>To deobfuscate text, pass the obfuscated text in to the function with the >original >seed.
>>```javascript
>>var optionalSeed = 1234;
>>var output = obfusChat.obfuscate("~^)3@C'bMp", optionalSeed);
>>//output is "input text"
>>```