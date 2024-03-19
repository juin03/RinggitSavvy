--Table quiz 
INSERT INTO quiz VALUES (DEFAULT,'What is your financial capacity to withstand losses?' );
INSERT INTO quiz VALUES (DEFAULT,'How familiar are you with investing and financial markets?' );
INSERT INTO quiz VALUES (DEFAULT,'How well do you handle emotional reactions to market volatility?' );
INSERT INTO quiz VALUES (DEFAULT,'What is your investment time frame?' );


INSERT INTO quiz VALUES (DEFAULT,'In general, how would your best friend describe you as a risk taker?' );
INSERT INTO quiz VALUES (DEFAULT,'You are on a TV game show and can choose one of the following. Which would you take?' );
INSERT INTO quiz VALUES (DEFAULT,'You have just finished saving for a "once-in-a-lifetime" vacation. Three weeks before you plan to leave, you lose yor job. You would:' );
INSERT INTO quiz VALUES (DEFAULT,'How would you respond to the following statement?  “It’s hard for me to pass up a bargain.” ' );


INSERT INTO quiz VALUES (DEFAULT,'If you unexpectedly received RM20,000 to invest, what would you do?' );
INSERT INTO quiz VALUES (DEFAULT,'In terms of experience, how comfortable are you investing in stocks or stock mutual funds?' );
INSERT INTO quiz VALUES (DEFAULT,'Which situation would make you the happiest?' );
INSERT INTO quiz VALUES (DEFAULT,'When you think of the word "risk" which of the following words comes to mind first?' );


INSERT INTO quiz VALUES (DEFAULT,'In your opinion, is it more important to be protected from rising consumer prices (inflation) or to maintain the safety of your money from loss or theft?' );
INSERT INTO quiz VALUES (DEFAULT,'You’ve just taken a job at a small fast growing company. After your first year you are offered the following bonus choices. Which one would you choose?' );
INSERT INTO quiz VALUES (DEFAULT,'Assume you are going to buy a home in the next few weeks. Your strategy would probably be:' );
INSERT INTO quiz VALUES (DEFAULT,'Given the best and worst case returns of the four investment choices below, which would you prefer?' );


INSERT INTO quiz VALUES (DEFAULT,'In addition to whatever you own, you have been given $1,000. You are now asked to choose between:' );
INSERT INTO quiz VALUES (DEFAULT,'In addition to whatever you own, you have been given $2,000. You are now asked to choose between:' );
INSERT INTO quiz VALUES (DEFAULT,'If you had to invest $20,000, which of the following investment choices would you find most appealing?' );
INSERT INTO quiz VALUES (DEFAULT,'Your geologist friend plans a gold mining venture. Success could yield 50-100x returns, but failure means total loss. With a 20% success chance, how much would you invest?' );


--Table options
INSERT INTO options VALUES (DEFAULT, 'I have substantial financial resources and can tolerate significant losses.', 1, 3);
INSERT INTO options VALUES (DEFAULT, 'My financial situation is balanced.', 1, 2);
INSERT INTO options VALUES (DEFAULT, 'I am financially constrained and cannot afford substantial losses.', 1, 1);

INSERT INTO options VALUES (DEFAULT, 'I actively follow market trends and understand investment concepts.', 2, 3);
INSERT INTO options VALUES (DEFAULT, 'I have some knowledge but seek further understanding.', 2, 2);
INSERT INTO options VALUES (DEFAULT, 'I’m relatively new to investing.', 2, 1);

INSERT INTO options VALUES (DEFAULT, 'I remain calm and rational during market ups and downs.', 3, 3);
INSERT INTO options VALUES (DEFAULT, 'I experience some emotional reactions but maintain perspective.', 3, 2);
INSERT INTO options VALUES (DEFAULT, 'I get anxious or stressed during market fluctuations.', 3, 1);

INSERT INTO options VALUES (DEFAULT, 'Less than 5 years', 4, 3);
INSERT INTO options VALUES (DEFAULT, '5 to 10 years', 4, 2);
INSERT INTO options VALUES (DEFAULT, 'Over 10 years', 4, 1);

INSERT INTO options VALUES (DEFAULT, 'A real gambler', 5, 4);
INSERT INTO options VALUES (DEFAULT, 'Willing to take risks after completing adequate research', 5, 3);
INSERT INTO options VALUES (DEFAULT, 'Cautious', 5, 2);
INSERT INTO options VALUES (DEFAULT, 'A real risk avoider', 5, 1);

INSERT INTO options VALUES (DEFAULT, '$1,000 in cash', 6, 1);
INSERT INTO options VALUES (DEFAULT, 'A 50% chance at winning $5,000', 6, 2);
INSERT INTO options VALUES (DEFAULT, 'A 25% chance at winning $10,000', 6, 3);
INSERT INTO options VALUES (DEFAULT, 'A 5% chance at winning $100,000', 6, 4);

INSERT INTO options VALUES (DEFAULT, 'Cancel the vacation', 7, 1);
INSERT INTO options VALUES (DEFAULT, 'Take a much more modest vacation', 7, 2);
INSERT INTO options VALUES (DEFAULT, 'Go as scheduled, reasoning that you need the time to prepare for a job search', 7, 3);
INSERT INTO options VALUES (DEFAULT, 'Extend your vacation, because this might be your last chance to go first-class', 7, 4);

INSERT INTO options VALUES (DEFAULT, 'Very true', 8, 1);
INSERT INTO options VALUES (DEFAULT, 'Sometimes true', 8, 2);
INSERT INTO options VALUES (DEFAULT, 'Not at all true', 8, 3);

INSERT INTO options VALUES (DEFAULT, 'Deposit it in a bank account, money market account, or an insured CD', 9, 1);
INSERT INTO options VALUES (DEFAULT, 'Invest it in safe high quality bonds or bond mutual funds', 9, 2);
INSERT INTO options VALUES (DEFAULT, 'Invest it in stocks or stock mutual funds', 9, 3);

INSERT INTO options VALUES (DEFAULT, 'Not at all comfortable', 10, 1);
INSERT INTO options VALUES (DEFAULT, 'Somewhat comfortable', 10, 2);
INSERT INTO options VALUES (DEFAULT, 'Very comfortable', 10, 3);

INSERT INTO options VALUES (DEFAULT, 'You win $50,000 in a publisher’s contest', 11, 2);
INSERT INTO options VALUES (DEFAULT, 'You inherit $50,000 from a rich relative', 11, 1);
INSERT INTO options VALUES (DEFAULT, 'You earn $50,000 by risking $1,000 in the options market', 11, 3);
INSERT INTO options VALUES (DEFAULT, 'Any of the above—after all, you’re happy with the $50,000', 11, 1);

INSERT INTO options VALUES (DEFAULT, 'Loss', 12, 1);
INSERT INTO options VALUES (DEFAULT, 'Uncertainty', 12, 2);
INSERT INTO options VALUES (DEFAULT, 'Opportunity', 12, 3);
INSERT INTO options VALUES (DEFAULT, 'Thrill', 12, 4);

INSERT INTO options VALUES (DEFAULT, 'Much more important to secure the safety of my money', 13, 1);
INSERT INTO options VALUES (DEFAULT, 'Much more important to be protected from rising prices (inflation)', 13, 3);

INSERT INTO options VALUES (DEFAULT, 'A five year employment contract', 14, 1);
INSERT INTO options VALUES (DEFAULT, 'A $25,000 bonus', 14, 2);
INSERT INTO options VALUES (DEFAULT, 'Stock in the company currently worth $25,000 with the hope of selling out later at a large profit', 14, 3);

INSERT INTO options VALUES (DEFAULT, 'To buy an affordable house where you can make monthly payments comfortably', 15, 1);
INSERT INTO options VALUES (DEFAULT, 'To stretch a bit financially to buy the house you really want', 15, 2);
INSERT INTO options VALUES (DEFAULT, 'To buy the most expensive house you can qualify for', 15, 3);
INSERT INTO options VALUES (DEFAULT, 'To borrow money from friends and relatives so you can qualify for a bigger mortgage', 15, 4);

INSERT INTO options VALUES (DEFAULT, '$200 gain best case; $0 gain/loss worst case', 16 ,1);
INSERT INTO options VALUES (DEFAULT, '$800 gain best case; $200 loss worst case', 16, 2);
INSERT INTO options VALUES (DEFAULT, '$2,600 gain best case; $800 loss worst case', 16, 3);
INSERT INTO options VALUES (DEFAULT, '$4,800 gain best case; $2,400 loss worst case', 16, 4);

INSERT INTO options VALUES (DEFAULT, 'A sure gain of $500', 17, 1);
INSERT INTO options VALUES (DEFAULT, 'A 50% chance to gain $1,000 and a 50% chance to gain nothing', 17, 3);

INSERT INTO options VALUES (DEFAULT, 'A sure loss of $500', 18, 1);
INSERT INTO options VALUES (DEFAULT, 'A 50% chance to lose $1,000 and a 50% chance to lose nothing', 18, 3);

INSERT INTO options VALUES (DEFAULT, '60% in low-risk investments 30% in medium-risk investments 10% in high-risk investments', 19, 1);
INSERT INTO options VALUES (DEFAULT, '30% in low-risk investments 40% in medium-risk investments 30% in high-risk investments', 19, 2);
INSERT INTO options VALUES (DEFAULT, '10% in low-risk investments 40% in medium-risk investments 50% in high-risk investments', 19, 3);

INSERT INTO options VALUES (DEFAULT, 'Nothing', 20, 1);
INSERT INTO options VALUES (DEFAULT, 'One month’s salary', 20, 2);
INSERT INTO options VALUES (DEFAULT, 'Three month’s salary', 20, 3);
INSERT INTO options VALUES (DEFAULT, 'Six month’s salary', 20, 4);
