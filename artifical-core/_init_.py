a={"sono un rottame":"no" "sono utile":"sì"}
b="niente"
while b!=""
  b=raw_input "fammi una domanda!"
  if a.has_key(b):
    print a[b]
  else
   print "non capisco"
   a = raw_input "cosa devo dire?"
import json
json.dumps(['foo', {'bar': ('baz', None, 1.0, 2)}])
print json.dumps("\"foo\bar")
print json.dumps(u'\u1234')
print json.dumps('\\')
print json.dumps({"c": 0, "b": 0, "a": 0}, sort_keys=True)
from StringIO import StringIO
io = StringIO()
json.dump(['streaming API'], io)
io.getvalue()
