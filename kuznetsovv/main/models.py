from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.db import models


class CallMeBack(models.Model):
    name = models.CharField('Имя', max_length=100, default="Заказчик не оставил имени")
    phone_number = models.CharField('Номер телефона', max_length=20, default="Заказчик не оставил номер телефона")
    email = models.CharField('Почта', max_length=100, default="Заказчик не оставил почту")
    date_left = models.DateTimeField(verbose_name='Была оставлена:', auto_now_add=True)

    def __str__(self):
        return 'Заявка от ' + str(self.name) + ', телефон: ' + str(self.phone_number) + ', почта: ' + str(self.email) \
               + '; Была оставлена: ' + str(self.date_left)

    class Meta:
        verbose_name = "Заявка"
        verbose_name_plural = "Заявки"


class MyAccountManager(BaseUserManager):
    """Менеджер аккаунтов пользователей, в частности, создание пользователей"""
    def create_user(self, email, first_name, last_name, password=None):
        """Создание пользователя"""
        if not email:
            raise ValueError('Users must have an email address')
        if not first_name:
            raise ValueError('Users must have an name')
        if not last_name:
            raise ValueError('Users must have an surname')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        """Создание суперпользователя"""
        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            first_name="",
            last_name="",
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
    username = models.CharField(max_length=60, default='username')
    email = models.EmailField(verbose_name="Почта", max_length=60, unique=True)
    date_joined = models.DateTimeField(verbose_name='Дата регистрации', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='Последний вход', auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_cafe_owner = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    y = models.IntegerField('Прокрутка', default=0)
    first_name = models.CharField('Имя', max_length=60, default='first_name')
    last_name = models.CharField('Фамилия', max_length=60, default='last_name')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = MyAccountManager()
