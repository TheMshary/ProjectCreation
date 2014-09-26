import time, os
from flask import Flask, render_template, request


app = Flask(__name__)


# ------ elements ------ #
# zeroth level elements #
zero_zero = "Lambda"
zero_one = "Pi"
zero_two = "Theta"
zero_three = "Omega"

zero_el = (zero_zero, zero_one, zero_two, zero_three)

# oneth level elements #
one_zero = "Flame"
one_one = "Ice"
one_two = "Wind"
one_three = "Rock"

one_el = (one_zero, one_one, one_two, one_three)

# interactions #
def combine( zero, one ):
	print "combining " ,zero, " and " ,one
	time.sleep(0.8)
	print "."
	time.sleep(0.8)
	print "."
	time.sleep(0.8)
	print "."
	time.sleep(0.8)
	print result(zero, one)
	
def result( zero, one ):
	level1 = zero.split("_", 1)
	level2 = one.split("_", 1)
	if leve1[0] == level2[0]: # if both elements are in the same level
		level = level1[0]
		if level == "0": # if elements are in the zeroth level
			return "You got... " + zero_two + "!!!!!!!"

@app.route("/")
def home():
	return render_template("main.html", shop_items = zero_el)
	


















if __name__ == '__main__':
	app.run(debug = True)
