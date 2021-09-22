from django.shortcuts import render, redirect
from main.models import CallMeBack


# Create your views here.
def index_page(request):
    if request.POST:
        if request.POST.get("action_type") == "call_me_back_form":
            order = CallMeBack()
            if request.POST.get("name"):
                order.name = request.POST.get("name")
            if request.POST.get("phone_number"):
                order.phone_number = request.POST.get("phone_number")
            if request.POST.get("email"):
                order.email = request.POST.get("email")
            order.save()
            return redirect('index')
    context = {

    }
    return render(request, 'index.html', context)


def template_1_page(request):
    context = {

    }
    return render(request, 'template_1.html', context)