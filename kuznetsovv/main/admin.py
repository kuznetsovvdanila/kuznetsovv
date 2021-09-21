from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from main.models import CallMeBack


class CallMeBackInline(admin.StackedInline):
    model = CallMeBack
    extra = 0


class CallMeBackAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Имя: ', {'fields': ['name']}),
        ('номер телефона: ', {'fields': ['phone_number']}),
        ('Почта: ', {'fields': ['email']}),
        ('Была оставлена: ', {'fields': ['date_left']}),
    ]
    inlines = [CallMeBackInline]


admin.site.register(CallMeBack)
