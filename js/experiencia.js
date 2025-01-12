document.querySelectorAll('input[name="language"]').forEach((radio) => {
    radio.addEventListener('change', () => {
        updateExperienceContent(radio.value.toLowerCase());
    });
});

function updateExperienceContent(language) {
    let leftColumnContent, rightColumnContent;

    switch (language) {
        case 'java':
            leftColumnContent = `
                <div class="header">
                    <span class="title">Experiencia Laboral - QA Funcional (Java)</span>
                </div>
                <div class="editor-content">
                            <code class="code">
                                <p><span class="color-0">import</span> <span class="color-1">testing.qa.*;</span></p>
                                <p><span class="color-0">public class</span> <span class="color-1">QA_Funcional</span> <span class="color-2">{</span></p>
                                
                                <p class="property">
                                    <span class="color-2">private String</span> <span class="color-3">posicion = "QA Funcional (Remoto)";</span>
                                </p>
                                <p class="property">
                                    <span class="color-2">private String</span> <span class="color-3">empresa = "Rappi S.A.S";</span>
                                </p>
                                <p class="property">
                                    <span class="color-2">private String</span> <span class="color-3">periodo = "[05-08-2024] - [05-02-2025]";</span>
                                </p>
                
                                <p class="method">
                                    <span class="color-2">public void</span> <span class="color-1">documentarCasosDePrueba</span>() <span class="color-4">{</span>
                                </p>
                                <p class="property">
                                    <span class="color-2">System.out.println</span>(<span class="color-3">"Elaboración de casos de prueba detallados para asegurar la cobertura completa de los requisitos funcionales."</span>);
                                </p>
                                <p class="method">
                                    <span class="color-4">}</span>
                                </p>
                
                                <p class="method">
                                    <span class="color-2">public void</span> <span class="color-1">ejecutarPruebas</span>() <span class="color-4">{</span>
                                </p>
                                <p class="property">
                                    <span class="color-2">System.out.println</span>(<span class="color-3">"Diseño y ejecución de pruebas funcionales, exploratorias y de regresión para identificar defectos."</span>);
                                </p>
                                <p class="method">
                                    <span class="color-4">}</span>
                                </p>
                
                                <p class="method">
                                    <span class="color-2">public void</span> <span class="color-1">soporteYTestingDeFeatures</span>() <span class="color-4">{</span>
                                </p>
                                <p class="property">
                                    <span class="color-2">System.out.println</span>(<span class="color-3">"Provisión de soporte continuo al equipo de desarrollo y realización de pruebas exhaustivas de nuevas funcionalidades."</span>);
                                </p>
                                <p class="method">
                                    <span class="color-4">}</span>
                                </p>
                
                                <p class="method">
                                    <span class="color-2">public void</span> <span class="color-1">comunicacionEfectiva</span>() <span class="color-4">{</span>
                                </p>
                                <p class="property">
                                    <span class="color-2">System.out.println</span>(<span class="color-3">"Participación proactiva en reuniones diarias, facilitando una comunicación efectiva y mejorando la colaboración entre equipos."</span>);
                                </p>
                                <p class="method">
                                    <span class="color-4">}</span>
                                </p>
                
                                <p><span class="color-2">}</span></p>
                            </code>
                        </div>
                    </div>
                </div>`;
            rightColumnContent = `
                <div class="header">
                    <span class="title">Proyectos Institucionales - SENA (Java)</span>
                </div>
                 <div class="editor-content">
                            <code class="code">
                                <p><span class="color-0">import</span> <span class="color-1">proyectos.institucionales.sena</span>;</p>
                                <p><span class="color-0">public class</span> <span class="color-1">Proyectos_Institucionales_SENA</span> <span class="color-2">{</span></p>
                
                                <p class="property">
                                    <span class="color-2">private String</span> <span class="color-3">nombreProyecto = "Sistema de Gestion de Mesa y Bar";</span>
                                </p>
                                <p class="property">
                                    <span class="color-2">private String</span> <span class="color-3">descripcion = "Creación de una plataforma para optimizar la administración y Gestion en el ambiente de mesa y bar en el SENA.";</span>
                                </p>
                
                                <p class="method">
                                    <span class="color-2">public void</span> <span class="color-1">desarrollarProyecto</span>() <span class="color-4">{</span>
                                </p>
                                <p class="property">
                                    <span class="color-2">System.out.println</span>(<span class="color-3">"Desarrollando proyecto: " + </span><span class="color-3">nombreProyecto</span> + <span class="color-3">" para optimizar la gestión de recursos, mejorando la eficiencia y reduciendo costos en la institución."</span>);
                                </p>
                                <p class="method">
                                    <span class="color-4">}</span>
                                </p>
                
                                <p class="method">
                                    <span class="color-2">public void</span> <span class="color-1">optimizarSistema</span>() <span class="color-4">{</span>
                                </p>
                                <p class="property">
                                    <span class="color-2">System.out.println</span>(<span class="color-3">"Optimizando sistema para " + </span><span class="color-3">descripcion</span> + <span class="color-3">" con el objetivo de mejorar la eficiencia y la experiencia de usuario para los empleados del SENA."</span>);
                                </p>
                                <p class="method">
                                    <span class="color-4">}</span>
                                </p>
                
                                <p class="method">
                                    <span class="color-2">public void</span> <span class="color-1">integrarTecnologiasAvanzadas</span>() <span class="color-4">{</span>
                                </p>
                                <p class="property">
                                    <span class="color-2">System.out.println</span>(<span class="color-3">"Integrando tecnologías avanzadas como AI y Machine Learning para mejorar la capacidad predictiva del sistema."</span>);
                                </p>
                                <p class="method">
                                    <span class="color-4">}</span>
                                </p>
                
                                <p class="method">
                                    <span class="color-2">public void</span> <span class="color-1">colaborarConEquipos</span>() <span class="color-4">{</span>
                                </p>
                                <p class="property">
                                    <span class="color-2">System.out.println</span>(<span class="color-3">"Colaborando activamente con equipos multidisciplinarios para asegurar la calidad y eficiencia del proyecto."</span>);
                                </p>
                                <p class="method">
                                    <span class="color-4">}</span>
                                </p>
                
                                <p><span class="color-2">}</span></p>
                            </code>
                        </div>`;
            break;
        case 'php':
            leftColumnContent = `
                <div class="header">
                    <span class="title">Experiencia Laboral - QA Funcional (PHP)</span>
                </div>
               <div class="editor-content">
    <code class="code">
        <p><span class="color-0">&lt;?php</span></p>
        <p><span class="color-0">class</span> <span class="color-1">QA_Funcional</span> <span class="color-2">{</span></p>
        
        <p class="property">
            <span class="color-2">private</span> <span class="color-2">$posicion =</span> <span class="color-3">"QA Funcional (Remoto)";</span>
        </p>
        <p class="property">
            <span class="color-2">private</span> <span class="color-2">$empresa =</span> <span class="color-3">"Rappi S.A.S";</span>
        </p>
        <p class="property">
            <span class="color-2">private</span> <span class="color-2">$periodo =</span> <span class="color-3">"[05-08-2024] - [05-02-2025]";</span>
        </p>

        <p class="method">
            <span class="color-2">public function</span> <span class="color-1">documentarCasosDePrueba</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">echo</span> <span class="color-3">"Elaboración de casos de prueba detallados para asegurar la cobertura completa de los requisitos funcionales.\n";</span>
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p class="method">
            <span class="color-2">public function</span> <span class="color-1">ejecutarPruebas</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">echo</span> <span class="color-3">"Diseño y ejecución de pruebas funcionales, exploratorias y de regresión para identificar defectos.\n";</span>
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p class="method">
            <span class="color-2">public function</span> <span class="color-1">soporteYTestingDeFeatures</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">echo</span> <span class="color-3">"Provisión de soporte continuo al equipo de desarrollo y realización de pruebas exhaustivas de nuevas funcionalidades.\n";</span>
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p class="method">
            <span class="color-2">public function</span> <span class="color-1">comunicacionEfectiva</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">echo</span> <span class="color-3">"Participación proactiva en reuniones diarias, facilitando una comunicación efectiva y mejorando la colaboración entre equipos.\n";</span>
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p><span class="color-2">}</span></p>
        <p><span class="color-0">?&gt;</span></p>
    </code>
</div>
`;
            rightColumnContent = `
                <div class="header">
                    <span class="title">Proyectos Institucionales - SENA (PHP)</span>
                </div>
                <div class="editor-content">
    <code class="code">
        <p><span class="color-0">&lt;?php</span></p>
        <p><span class="color-0">class</span> <span class="color-1">Proyectos_Institucionales_SENA</span> <span class="color-2">{</span></p>

        <p class="property">
            <span class="color-2">private</span> <span class="color-2">$nombreProyecto =</span> <span class="color-3">"Sistema de Gestion de Mesa y Bar";</span>
        </p>
        <p class="property">
            <span class="color-2">private</span> <span class="color-2">$descripcion =</span> <span class="color-3">"Creación de una plataforma para optimizar la administración y Gestion en el ambiente de mesa y bar en el SENA.";</span>
        </p>

        <p class="method">
            <span class="color-2">public function</span> <span class="color-1">desarrollarProyecto</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">echo</span> <span class="color-3">"Desarrollando proyecto: " . </span><span class="color-3">$nombreProyecto</span> . <span class="color-3">" para optimizar la gestión de recursos, mejorando la eficiencia y reduciendo costos en la institución.";</span>
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p class="method">
            <span class="color-2">public function</span> <span class="color-1">optimizarSistema</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">echo</span> <span class="color-3">"Optimizando sistema para " . </span><span class="color-3">$descripcion</span> . <span class="color-3">" con el objetivo de mejorar la eficiencia y la experiencia de usuario para los empleados del SENA.";</span>
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p class="method">
            <span class="color-2">public function</span> <span class="color-1">integrarTecnologiasAvanzadas</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">echo</span> <span class="color-3">"Integrando tecnologías avanzadas como AI y Machine Learning para mejorar la capacidad predictiva del sistema.";</span>
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p class="method">
            <span class="color-2">public function</span> <span class="color-1">colaborarConEquipos</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">echo</span> <span class="color-3">"Colaborando activamente con equipos multidisciplinarios para asegurar la calidad y eficiencia del proyecto.";</span>
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p><span class="color-2">}</span></p>
        <p><span class="color-0">?&gt;</span></p>
    </code>
</div>
`;
            break;
        case 'csharp':
            leftColumnContent = `
                <div class="header">
                    <span class="title">Experiencia Laboral - QA Funcional (C#)</span>
                </div>
               <div class="editor-content">
    <code class="code">
        <p><span class="color-0">using</span> <span class="color-1">System;</span></p>
        <p><span class="color-0">public class</span> <span class="color-1">QA_Funcional</span> <span class="color-2">{</span></p>
        
        <p class="property">
            <span class="color-2">private string</span> <span class="color-3">posicion = "QA Funcional (Remoto)";</span>
        </p>
        <p class="property">
            <span class="color-2">private string</span> <span class="color-3">empresa = "Rappi S.A.S";</span>
        </p>
        <p class="property">
            <span class="color-2">private string</span> <span class="color-3">periodo = "[05-08-2024] - [05-02-2025]";</span>
        </p>

        <p class="method">
            <span class="color-2">public void</span> <span class="color-1">DocumentarCasosDePrueba</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">Console.WriteLine</span>(<span class="color-3">"Elaboración de casos de prueba detallados para asegurar la cobertura completa de los requisitos funcionales."</span>);
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p class="method">
            <span class="color-2">public void</span> <span class="color-1">EjecutarPruebas</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">Console.WriteLine</span>(<span class="color-3">"Diseño y ejecución de pruebas funcionales, exploratorias y de regresión para identificar defectos."</span>);
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p class="method">
            <span class="color-2">public void</span> <span class="color-1">SoporteYTestingDeFeatures</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">Console.WriteLine</span>(<span class="color-3">"Provisión de soporte continuo al equipo de desarrollo y realización de pruebas exhaustivas de nuevas funcionalidades."</span>);
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p class="method">
            <span class="color-2">public void</span> <span class="color-1">ComunicacionEfectiva</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">Console.WriteLine</span>(<span class="color-3">"Participación proactiva en reuniones diarias, facilitando una comunicación efectiva y mejorando la colaboración entre equipos."</span>);
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p><span class="color-2">}</span></p>
    </code>
</div>
`;
            rightColumnContent = `
                <div class="header">
                    <span class="title">Proyectos Institucionales - SENA (C#)</span>
                </div>
                <div class="editor-content">
    <code class="code">
        <p><span class="color-0">using</span> <span class="color-1">System;</span></p>
        <p><span class="color-0">public class</span> <span class="color-1">Proyectos_Institucionales_SENA</span> <span class="color-2">{</span></p>

        <p class="property">
            <span class="color-2">private string</span> <span class="color-3">nombreProyecto = "Sistema de Gestion de Mesa y Bar";</span>
        </p>
        <p class="property">
            <span class="color-2">private string</span> <span class="color-3">descripcion = "Creación de una plataforma para optimizar la administración y Gestion en el ambiente de mesa y bar en el SENA.";</span>
        </p>

        <p class="method">
            <span class="color-2">public void</span> <span class="color-1">DesarrollarProyecto</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">Console.WriteLine</span>(<span class="color-3">"Desarrollando proyecto: " + </span><span class="color-3">nombreProyecto</span> + <span class="color-3">" para optimizar la gestión de recursos, mejorando la eficiencia y reduciendo costos en la institución."</span>);
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p class="method">
            <span class="color-2">public void</span> <span class="color-1">OptimizarSistema</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">Console.WriteLine</span>(<span class="color-3">"Optimizando sistema para " + </span><span class="color-3">descripcion</span> + <span class="color-3">" con el objetivo de mejorar la eficiencia y la experiencia de usuario para los empleados del SENA."</span>);
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p class="method">
            <span class="color-2">public void</span> <span class="color-1">IntegrarTecnologiasAvanzadas</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">Console.WriteLine</span>(<span class="color-3">"Integrando tecnologías avanzadas como AI y Machine Learning para mejorar la capacidad predictiva del sistema."</span>);
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p class="method">
            <span class="color-2">public void</span> <span class="color-1">ColaborarConEquipos</span>() <span class="color-4">{</span>
        </p>
        <p class="property">
            <span class="color-2">Console.WriteLine</span>(<span class="color-3">"Colaborando activamente con equipos multidisciplinarios para asegurar la calidad y eficiencia del proyecto."</span>);
        </p>
        <p class="method">
            <span class="color-4">}</span>
        </p>

        <p><span class="color-2">}</span></p>
    </code>
</div>
`;
            break;
    }

    document.querySelector('.exp_left_column .code-editor').innerHTML = leftColumnContent;
    document.querySelector('.exp_right_column .code-editor').innerHTML = rightColumnContent;
}
