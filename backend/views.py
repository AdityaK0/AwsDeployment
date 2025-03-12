from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from django.utils.decorators import method_decorator

@method_decorator(never_cache, name="dispatch")
class ReactAppView(TemplateView):
    template_name = "index.html" 
