f = open('student.txt', mode='w')
n = int(input("number of students:"))

for i in range(n):
    f.write("\n")
    f.write('Name of student:')
    name = input("student name=")
    name = name + '\n'
    f.write(name)
    
    f.write('roll number of student:')
    roll = input("student roll= ")
    roll = roll + '\n'
    f.write(roll)
    
    f.write('science:')
    sci = input("enter mark of science:")
    sci = sci + '\n'
    f.write(sci)
    
    f.write('maths:')
    math = input("enter marks of maths:")
    math = math + '\n'
    f.write(math)
    
    f.write('chemistry:')
    chem = input("enter marks of chemistry:")
    chem = chem + '\n'
    f.write(chem)

f.close()
