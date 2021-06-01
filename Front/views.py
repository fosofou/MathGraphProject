from django.shortcuts import render

# Create your views here.
def main(request):
    return render(request, 'main.html', {})

def graph(request):
    return render(request, 'graph.html', {})

def mobile(request):
    return render(request, 'mobile.html', {});
