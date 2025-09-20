import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    service: '',
    master: '',
    date: '',
    time: '',
    notes: ''
  });

  const services = [
    { id: 1, name: 'Классическая стрижка', price: 2000, duration: '45 мин' },
    { id: 2, name: 'Стрижка + борода', price: 3000, duration: '60 мин' },
    { id: 3, name: 'Королевский уход', price: 4500, duration: '90 мин' },
    { id: 4, name: 'Детская стрижка', price: 1500, duration: '30 мин' },
    { id: 5, name: 'Оформление бороды', price: 1500, duration: '30 мин' },
    { id: 6, name: 'Горячее бритье', price: 2500, duration: '45 мин' }
  ];

  const masters = [
    { 
      id: 1, 
      name: 'Александр Петров', 
      experience: '8 лет', 
      specialization: 'Классические стрижки, бороды',
      avatar: '👨‍💼'
    },
    { 
      id: 2, 
      name: 'Дмитрий Козлов', 
      experience: '6 лет', 
      specialization: 'Современные стрижки, фейды',
      avatar: '✂️'
    },
    { 
      id: 3, 
      name: 'Игорь Смирнов', 
      experience: '10 лет', 
      specialization: 'Премиум-услуги, горячее бритье',
      avatar: '🥇'
    }
  ];

  const galleryImages = [
    '/img/a9336a39-b118-4481-abcc-6165d540b9c3.jpg',
    '/img/a9336a39-b118-4481-abcc-6165d540b9c3.jpg',
    '/img/a9336a39-b118-4481-abcc-6165d540b9c3.jpg',
    '/img/a9336a39-b118-4481-abcc-6165d540b9c3.jpg'
  ];

  const handleBooking = () => {
    console.log('Booking submitted:', bookingForm);
    alert('Заявка на запись отправлена! Мы свяжемся с вами в ближайшее время.');
    setBookingForm({
      name: '',
      phone: '',
      service: '',
      master: '',
      date: '',
      time: '',
      notes: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold rounded text-white flex items-center justify-center font-bold">
                M
              </div>
              <h1 className="text-xl font-display font-bold">MEN'S TIME</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="story-link hover:text-gold transition-colors">Главная</a>
              <a href="#services" className="story-link hover:text-gold transition-colors">Услуги</a>
              <a href="#masters" className="story-link hover:text-gold transition-colors">Мастера</a>
              <a href="#gallery" className="story-link hover:text-gold transition-colors">Галерея</a>
              <a href="#contact" className="story-link hover:text-gold transition-colors">Контакты</a>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gold hover:bg-gold-600 text-white">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Записаться
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Онлайн запись</DialogTitle>
                  <DialogDescription>
                    Выберите удобное время и мастера
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input
                        id="name"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                        placeholder="+7 (999) 999-99-99"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Услуга</Label>
                    <Select onValueChange={(value) => setBookingForm({...bookingForm, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.name}>
                            {service.name} - {service.price}₽
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Мастер</Label>
                    <Select onValueChange={(value) => setBookingForm({...bookingForm, master: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите мастера" />
                      </SelectTrigger>
                      <SelectContent>
                        {masters.map((master) => (
                          <SelectItem key={master.id} value={master.name}>
                            {master.avatar} {master.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Дата</Label>
                      <Input
                        id="date"
                        type="date"
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Время</Label>
                      <Select onValueChange={(value) => setBookingForm({...bookingForm, time: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Время" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="13:00">13:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                          <SelectItem value="18:00">18:00</SelectItem>
                          <SelectItem value="19:00">19:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Пожелания</Label>
                    <Textarea
                      id="notes"
                      value={bookingForm.notes}
                      onChange={(e) => setBookingForm({...bookingForm, notes: e.target.value})}
                      placeholder="Дополнительные пожелания..."
                    />
                  </div>

                  <Button onClick={handleBooking} className="w-full bg-gold hover:bg-gold-600">
                    Записаться
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-charcoal-800 to-charcoal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                  MEN'S
                  <span className="block text-gradient">TIME</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  Премиальный барбершоп для современных мужчин. Профессиональные стрижки, уход за бородой и королевский сервис.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-gold hover:bg-gold-600 text-white hover-scale">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Записаться онлайн
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">8+</div>
                  <div className="text-sm text-gray-400">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">1000+</div>
                  <div className="text-sm text-gray-400">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">3</div>
                  <div className="text-sm text-gray-400">мастера-профи</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl p-1">
                <img
                  src="/img/a9336a39-b118-4481-abcc-6165d540b9c3.jpg"
                  alt="Барбершоп Men's Time"
                  className="w-full h-[600px] object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white text-charcoal-800 p-6 rounded-xl shadow-2xl">
                <div className="flex items-center space-x-3">
                  <Icon name="Star" size={24} className="text-gold fill-gold" />
                  <div>
                    <div className="font-bold text-lg">4.9</div>
                    <div className="text-sm text-gray-600">200+ отзывов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр барбер-услуг для создания вашего идеального образа
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={service.id} className="hover-scale group border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg group-hover:text-gold transition-colors">
                      {service.name}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-gold-50 text-gold-800">
                      {service.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gold">{service.price}₽</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-white">
                          Записаться
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Masters Section */}
      <section id="masters" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Наши мастера</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Команда профессионалов с многолетним опытом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {masters.map((master) => (
              <Card key={master.id} className="text-center hover-scale border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    {master.avatar}
                  </div>
                  <CardTitle className="text-xl">{master.name}</CardTitle>
                  <CardDescription className="text-gold font-semibold">
                    Опыт: {master.experience}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{master.specialization}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-gold hover:bg-gold-600 text-white w-full">
                        Записаться к мастеру
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Галерея работ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ и атмосфера барбершопа
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg hover-scale">
                <img
                  src={image}
                  alt={`Работа ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Icon name="ZoomIn" size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-charcoal-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Адрес</h3>
                    <p className="text-gray-300">ул. Арбат, 15, Москва</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Телефон</h3>
                    <p className="text-gray-300">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Режим работы</h3>
                    <p className="text-gray-300">Пн-Вс: 10:00 - 21:00</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Icon name="Instagram" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Instagram</h3>
                    <p className="text-gray-300">@menstime_barber</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-gold hover:bg-gold-600 text-white">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Записаться прямо сейчас
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 text-charcoal-800">
              <h3 className="text-2xl font-bold mb-6">Обратная связь</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Имя</Label>
                  <Input id="contact-name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="contact-phone">Телефон</Label>
                  <Input id="contact-phone" placeholder="+7 (999) 999-99-99" />
                </div>
                <div>
                  <Label htmlFor="contact-message">Сообщение</Label>
                  <Textarea id="contact-message" placeholder="Ваше сообщение..." />
                </div>
                <Button className="w-full bg-gold hover:bg-gold-600 text-white">
                  Отправить сообщение
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gold rounded text-white flex items-center justify-center font-bold">
                M
              </div>
              <span className="text-xl font-display font-bold">MEN'S TIME</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 Men's Time. Все права защищены.</p>
              <p className="text-sm text-gray-500">Премиальный барбершоп в Москве</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;