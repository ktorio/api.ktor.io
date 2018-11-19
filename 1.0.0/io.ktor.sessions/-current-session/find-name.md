---
title: CurrentSession.findName - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">CurrentSession</a> / <a href="./find-name.html">findName</a></div>

# findName

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">findName</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.CurrentSession$findName(kotlin.reflect.KClass((kotlin.Any)))/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Find session name for the specified <a href="find-name.html#io.ktor.sessions.CurrentSession$findName(kotlin.reflect.KClass((kotlin.Any)))/type">type</a> or fail if not found

### Exceptions

<code>IllegalStateException</code> - if no session provider registered for <a href="find-name.html#io.ktor.sessions.CurrentSession$findName(kotlin.reflect.KClass((kotlin.Any)))/type">type</a>