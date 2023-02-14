# 03-challenge
UConn Bootcamp Chapter 3 Challenge: Random Password Generator

## Description
In this chapter 3 challenge, I took my knowledge of Javascript and used it to create a Random Password Generator.  I now have evidence that I can take hundreds of lines of code and turn it into a working, functioning web application.

## Process
After creating my repository, I noticed that the HTML and CSS documents were already done for me, which was nice.  So, the first thing I did was get myself familiar with the index.html, because I figured I would have to use it in my Javascript document.

The next thing I did was I got to work creating my first variables and commenting out tags and sections that would help me later on. ![tagsnsections03](/Users/daelenwall/Desktop/tagsnsections03.png)

After this, I decided that 'window.prompt' was a good way of whittling down the various possible outcomes for this password.  To add on to this, I needed a way to actually communicate that a 'yes' or a 'no' meant something.  So, I added a seperate set of variables at the top of my 'generatePassword' function and had these equal either '1' for a 'yes' or '0' for a 'no'.  I did this using 'if' statements. ![firstvars03](/Users/daelenwall/Desktop/firstvars03.png)

Now that I was finished with 3 elements of my 'generatePassword' function, I decided it was time to tackle the password length element, the one I had been dreading.  It was very difficult and took up the majority of my time.  I eventually realized that in order for the length of the password to cooperate with the inclusions of uppercase, lowercase, etc, they needed to be separated.  I created character sets or 'charset's for each included element and set up some simple 'for' loops for them.  This would ensure that I got a password length of whatever the user said they wanted and that that password had a random spread of each element they agreed to. ![paslen03](/Users/daelenwall/Desktop/paslen03.png)

Next, I thought that I had finished, until I realized something I had previously overlooked.  The password went in order from lowercase to uppercase to numbers and finally to special characters.  I needed them shuffled to really make it random.  So after a bit of digging I found a string shuffler that worked really well for my project and I took it and ran.  ![passhuffle03](/Users/daelenwall/Desktop/passhuffle03.png)

Finally, I had one more hurdle and that was the 'integer divider' or at least, that's what I called it.  Again, I needed some help from good ol' Google with this one, but it is what it is.  It's a little hard to explain the problem I was having, but essentially the input of varying 'yes's and 'no's was altering the password length.  Weird, right?  Well I figured out it was a problem with my remainder system, so with about 2 hours of trial and error as well as an extra hour of debugging, I eventually got it. ![intdiv03](/Users/daelenwall/Desktop/intdiv03.png) ![intdiv03-2](/Users/daelenwall/Desktop/intdiv03-02.png)

## Conclusion
The finished product is something I'm really proud of because it took me about 15-20 hours and an awful lot of effort to get it working properly.  I was able to use new tips and tricks I picked up like constantly 'console.log'ing and commenting out certain elements which made this problem all the more enjoyable to finally solve.  I did receive some help from a tutor, classmates, and Google, but tis' the life of a programmer.
