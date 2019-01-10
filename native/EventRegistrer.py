from pymouse import PyMouseEvent
import sys
import json

class EventRegistrer(PyMouseEvent):
    def scroll(self, x, y, v, h):
        res = {'rotation': v}
        print json.dumps(res)
        sys.stdout.flush()
Obj = EventRegistrer()
Obj.run()
