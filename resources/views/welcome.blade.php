<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Rafael Gomes Schebuk</title>

    </head>
    <body>
        <transition name="fade" tag="div" class="wrapper" mode="out-in">
            <div class="wrapper" id="app">
                <app></app>
            </div>
        </transition>
        <script src="{{ asset('js/app.js')}}"></script>
    </body>
</html>
