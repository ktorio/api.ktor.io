---
title: JacksonConverter.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.jackson</a> / <a href="index.html">JacksonConverter</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">JacksonConverter</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.jackson.JacksonConverter$<init>(com.fasterxml.jackson.databind.ObjectMapper)/objectmapper">objectmapper</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectMapper</span>&nbsp;<span class="symbol">=</span>&nbsp;jacksonObjectMapper()<span class="symbol">)</span></code></div>
<pre markdown="1">    install(ContentNegotiation) {
       register(ContentType.Application.Json, JacksonConverter())
    }

    to be able to modify the objectMapper (eg. using specific modules and/or serializers and/or
    configuration options, you could use the following (as seen in the ktor-samples):

    install(ContentNegotiation) {
        jackson {
            configure(SerializationFeature.INDENT_OUTPUT, true)
            registerModule(JavaTimeModule())</pre>
* <pre markdown="1">       }</pre>    }
