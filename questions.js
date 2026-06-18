const QUESTIONS = [
  {
    "id": 1,
    "chapter": 1,
    "domain": "Clinical Reasoning",
    "question": "A 58-year-old man presents with chest pain, diaphoresis, and radiation to the left arm for 45 minutes. His ECG shows ST elevations in leads II, III, and aVF. Which of the following best describes the cognitive process used when the physician immediately recognizes this presentation as an inferior STEMI?",
    "options": {
      "A": "Hypothetico-deductive reasoning",
      "B": "Pattern recognition",
      "C": "Bayesian analysis",
      "D": "Systematic algorithmic approach"
    },
    "answer": "B",
    "explanation": "Pattern recognition (type 1 thinking) allows experienced clinicians to instantly match a presentation to a known illness script \u2014 chest pain + diaphoresis + inferior ST elevations = inferior STEMI \u2014 without consciously working through a differential."
  },
  {
    "id": 2,
    "chapter": 1,
    "domain": "Clinical Reasoning",
    "question": "A 72-year-old woman presents with 3 weeks of fatigue, weight loss, and night sweats. Her pretest probability of lymphoma is estimated at 30% based on clinical features. A CT scan showing mediastinal lymphadenopathy has a sensitivity of 85% and specificity of 90% for lymphoma. What is the approximate post-test probability of lymphoma given a positive CT?",
    "options": {
      "A": "55%",
      "B": "70%",
      "C": "78%",
      "D": "92%"
    },
    "answer": "C",
    "explanation": "Using Bayes' theorem: positive predictive value in this context \u2248 (0.85\u00d70.30)/[(0.85\u00d70.30)+(0.10\u00d70.70)] = 0.255/0.325 \u2248 78%. Post-test probability rises substantially with a positive high-specificity test."
  },
  {
    "id": 3,
    "chapter": 1,
    "domain": "Clinical Reasoning",
    "question": "A 45-year-old woman with a history of migraines presents with acute onset headache she describes as 'the worst headache of my life.' The physician considers subarachnoid hemorrhage but also considers this is likely another migraine given her history. This cognitive error is best described as:",
    "options": {
      "A": "Framing effect",
      "B": "Premature closure",
      "C": "Availability heuristic",
      "D": "Anchoring bias"
    },
    "answer": "D",
    "explanation": "Anchoring bias occurs when early information (prior migraines) causes the clinician to insufficiently adjust their differential despite new evidence (thunderclap onset). This can lead to missing life-threatening diagnoses."
  },
  {
    "id": 4,
    "chapter": 1,
    "domain": "Clinical Reasoning",
    "question": "A 65-year-old man with hypertension and dyslipidemia presents with dyspnea on exertion and bilateral lower extremity edema. The most appropriate next step in generating a focused differential diagnosis is:",
    "options": {
      "A": "Order a BNP and chest X-ray immediately",
      "B": "Obtain a complete history including onset, severity, and associated symptoms",
      "C": "Proceed directly to echocardiography",
      "D": "Empirically start diuretic therapy"
    },
    "answer": "B",
    "explanation": "Clinical reasoning begins with a complete history to characterize symptoms (onset, duration, associated features, exacerbating factors). This allows generation of an appropriate illness-based differential before ordering tests."
  },
  {
    "id": 5,
    "chapter": 1,
    "domain": "Clinical Reasoning",
    "question": "Which of the following represents the correct order of the diagnostic reasoning process in the hypothetico-deductive method?",
    "options": {
      "A": "Gather cues \u2192 generate hypotheses \u2192 test hypotheses \u2192 refine diagnosis",
      "B": "Order tests \u2192 gather results \u2192 form diagnosis \u2192 treat",
      "C": "Pattern match \u2192 confirm with biopsy \u2192 treat",
      "D": "Generate hypotheses \u2192 gather cues \u2192 form diagnosis \u2192 test"
    },
    "answer": "A",
    "explanation": "The hypothetico-deductive method: cue acquisition (history/exam) \u2192 hypothesis generation (differential) \u2192 cue interpretation (testing each hypothesis) \u2192 hypothesis evaluation \u2192 diagnosis refinement."
  },
  {
    "id": 6,
    "chapter": 1,
    "domain": "Clinical Reasoning",
    "question": "A medical student presents a case and concludes the patient has pneumonia based on the first two features but does not consider other diagnoses. This describes which cognitive error?",
    "options": {
      "A": "Confirmation bias",
      "B": "Premature closure",
      "C": "Search satisficing",
      "D": "Framing effect"
    },
    "answer": "B",
    "explanation": "Premature closure is the tendency to stop considering diagnoses once a plausible one is found. It is the most common cognitive error in clinical medicine and a frequent source of diagnostic error."
  },
  {
    "id": 7,
    "chapter": 1,
    "domain": "Clinical Reasoning",
    "question": "A 50-year-old woman has a positive FOBT. The pre-test probability of colorectal cancer in her age group is 0.5%. The FOBT has a sensitivity of 60% and specificity of 95%. What is the approximate positive predictive value?",
    "options": {
      "A": "3%",
      "B": "6%",
      "C": "12%",
      "D": "25%"
    },
    "answer": "B",
    "explanation": "PPV = (Sensitivity \u00d7 Prevalence) / [(Sensitivity \u00d7 Prevalence) + (1-Specificity)(1-Prevalence)] = (0.6\u00d70.005)/[(0.6\u00d70.005)+(0.05\u00d70.995)] \u2248 0.003/0.0528 \u2248 5.7% \u2248 6%. Low prevalence dramatically lowers PPV even with decent test characteristics."
  },
  {
    "id": 8,
    "chapter": 1,
    "domain": "Clinical Reasoning",
    "question": "Which of the following best distinguishes illness scripts from formal diagnostic criteria?",
    "options": {
      "A": "Illness scripts are used only by trainees; diagnostic criteria are used by experts",
      "B": "Illness scripts incorporate epidemiology, pathophysiology, and clinical features as a mental model",
      "C": "Diagnostic criteria are less accurate than illness scripts",
      "D": "Illness scripts require laboratory confirmation"
    },
    "answer": "B",
    "explanation": "Illness scripts are expert mental models integrating predisposing conditions (who gets it), pathophysiologic fault (what goes wrong), and clinical consequences (symptoms/signs). They enable rapid pattern recognition in experienced clinicians."
  },
  {
    "id": 9,
    "chapter": 2,
    "domain": "Cardiology",
    "question": "A 35-year-old man is told he has a 'bicuspid aortic valve' on echocardiography. Which embryological structure gives rise to the aortic valve?",
    "options": {
      "A": "Endocardial cushions",
      "B": "Truncal ridges of the conotruncus",
      "C": "Sinus venosus",
      "D": "Bulbus cordis"
    },
    "answer": "B",
    "explanation": "The aortic and pulmonary valves develop from the truncal ridges (spiral ridges) of the conotruncus. Bicuspid aortic valve results from abnormal fusion of two of the three truncal ridges during development."
  },
  {
    "id": 10,
    "chapter": 2,
    "domain": "Cardiology",
    "question": "During systole, blood flows from the left ventricle into the aorta. Which of the following valves must be open and which must be closed simultaneously for this to occur?",
    "options": {
      "A": "Aortic valve open; mitral valve closed",
      "B": "Aortic valve closed; mitral valve open",
      "C": "Both aortic and mitral valves open",
      "D": "Aortic valve open; tricuspid valve closed"
    },
    "answer": "A",
    "explanation": "During ventricular systole: the aortic valve opens (when LV pressure exceeds aortic pressure) and the mitral valve closes (when LV pressure exceeds LA pressure). This directs blood forward into the aorta and prevents regurgitation into the atrium."
  },
  {
    "id": 11,
    "chapter": 2,
    "domain": "Cardiology",
    "question": "A patient's cardiac output is 5 L/min and his heart rate is 70 beats per minute. What is his stroke volume?",
    "options": {
      "A": "45 mL",
      "B": "71 mL",
      "C": "85 mL",
      "D": "100 mL"
    },
    "answer": "B",
    "explanation": "Stroke Volume = Cardiac Output / Heart Rate = 5000 mL/min \u00f7 70 bpm \u2248 71 mL per beat. Normal resting stroke volume is 60\u2013100 mL."
  },
  {
    "id": 12,
    "chapter": 2,
    "domain": "Cardiology",
    "question": "Which of the following best describes the Frank-Starling mechanism?",
    "options": {
      "A": "Increased heart rate increases cardiac output proportionally",
      "B": "Increased ventricular filling (preload) increases stroke volume up to a physiologic limit",
      "C": "Increased afterload increases stroke volume",
      "D": "Sympathetic stimulation is required for ventricular contraction"
    },
    "answer": "B",
    "explanation": "The Frank-Starling mechanism states that within physiological limits, the greater the end-diastolic volume (preload), the more the myocardium is stretched, and the greater the subsequent force of contraction and stroke volume."
  },
  {
    "id": 13,
    "chapter": 2,
    "domain": "Cardiology",
    "question": "A 70-year-old man with severe aortic stenosis has a mean aortic valve gradient of 50 mmHg. This elevation in afterload leads to which compensatory mechanism?",
    "options": {
      "A": "Ventricular dilation",
      "B": "Concentric left ventricular hypertrophy",
      "C": "Eccentric left ventricular hypertrophy",
      "D": "Right ventricular hypertrophy"
    },
    "answer": "B",
    "explanation": "Pressure overload (as in aortic stenosis or hypertension) causes sarcomeres to replicate in parallel, leading to concentric hypertrophy (increased wall thickness with preserved or reduced cavity size). Volume overload causes eccentric hypertrophy (dilation)."
  },
  {
    "id": 14,
    "chapter": 2,
    "domain": "Cardiology",
    "question": "During cardiac auscultation, S1 corresponds to closure of which valves?",
    "options": {
      "A": "Aortic and pulmonary valves",
      "B": "Mitral and tricuspid valves",
      "C": "Aortic and mitral valves",
      "D": "Pulmonary and tricuspid valves"
    },
    "answer": "B",
    "explanation": "S1 (first heart sound) is produced by closure of the mitral (M1) and tricuspid (T1) valves at the onset of ventricular systole. S2 is produced by closure of the aortic and pulmonary valves at the end of systole."
  },
  {
    "id": 15,
    "chapter": 2,
    "domain": "Cardiology",
    "question": "The coronary arteries fill primarily during which phase of the cardiac cycle?",
    "options": {
      "A": "Isovolumetric contraction",
      "B": "Rapid ejection phase",
      "C": "Diastole",
      "D": "Isovolumetric relaxation"
    },
    "answer": "C",
    "explanation": "Coronary perfusion occurs predominantly during diastole because during systole, myocardial compression collapses the intramyocardial vessels (especially in the subendocardium). Tachycardia reduces diastolic time and can impair coronary perfusion."
  },
  {
    "id": 16,
    "chapter": 2,
    "domain": "Cardiology",
    "question": "Which structure is responsible for initiating the electrical impulse that drives normal sinus rhythm?",
    "options": {
      "A": "AV node",
      "B": "Bundle of His",
      "C": "SA node",
      "D": "Purkinje fibers"
    },
    "answer": "C",
    "explanation": "The sinoatrial (SA) node in the right atrium is the primary pacemaker of the heart with an intrinsic rate of 60\u2013100 bpm. It has the fastest rate of spontaneous depolarization (phase 4) of any cardiac tissue."
  },
  {
    "id": 17,
    "chapter": 3,
    "domain": "Cardiology",
    "question": "A 52-year-old man has a blood pressure of 158/96 mmHg on three separate visits. He has no other comorbidities. Which of the following is the most appropriate initial therapy according to current guidelines?",
    "options": {
      "A": "Lifestyle modification alone for 6 months",
      "B": "Thiazide diuretic, ACE inhibitor, or calcium channel blocker",
      "C": "Beta-blocker monotherapy",
      "D": "ARB plus beta-blocker combination"
    },
    "answer": "B",
    "explanation": "JNC/ACC/AHA guidelines recommend lifestyle modifications plus antihypertensive drug therapy for stage 2 hypertension (\u2265140/90 mmHg). First-line agents are thiazide diuretics, ACE inhibitors/ARBs, or calcium channel blockers. Beta-blockers are not first-line in uncomplicated hypertension."
  },
  {
    "id": 18,
    "chapter": 3,
    "domain": "Cardiology",
    "question": "A 45-year-old Black man with hypertension and no other comorbidities is started on antihypertensive therapy. Which agent is preferred in this population according to ACC/AHA guidelines?",
    "options": {
      "A": "ACE inhibitor",
      "B": "Beta-blocker",
      "C": "Thiazide diuretic or calcium channel blocker",
      "D": "ARB"
    },
    "answer": "C",
    "explanation": "ACE inhibitors and ARBs are less effective as monotherapy in Black patients due to generally lower renin activity. Thiazide diuretics and calcium channel blockers demonstrate superior BP reduction and outcome benefit in this population."
  },
  {
    "id": 19,
    "chapter": 3,
    "domain": "Cardiology",
    "question": "Angiotensin II exerts its blood pressure effects primarily through which receptor?",
    "options": {
      "A": "AT2 receptor \u2014 vasoconstriction and aldosterone release",
      "B": "AT1 receptor \u2014 vasoconstriction and aldosterone release",
      "C": "Beta-1 receptor \u2014 increased cardiac output",
      "D": "Alpha-1 receptor \u2014 renal sodium reabsorption"
    },
    "answer": "B",
    "explanation": "Angiotensin II acts on AT1 receptors to cause vasoconstriction (directly), aldosterone secretion (from adrenal zona glomerulosa \u2192 Na+ retention), ADH release, and sympathetic activation. ARBs block the AT1 receptor."
  },
  {
    "id": 20,
    "chapter": 3,
    "domain": "Cardiology",
    "question": "A patient on lisinopril for hypertension develops a persistent dry cough. The mechanism of this adverse effect is:",
    "options": {
      "A": "Angiotensin II accumulation causing bronchospasm",
      "B": "Bradykinin accumulation in the airways",
      "C": "Direct mast cell degranulation",
      "D": "Reduced prostaglandin synthesis in airway mucosa"
    },
    "answer": "B",
    "explanation": "ACE inhibitors block the degradation of bradykinin (ACE normally catabolizes bradykinin). Accumulated bradykinin stimulates airway sensory nerve endings (via prostaglandins and substance P), causing the dry, non-productive cough in ~10\u201315% of patients."
  },
  {
    "id": 21,
    "chapter": 3,
    "domain": "Cardiology",
    "question": "A 60-year-old woman with hypertension, diabetes, and CKD (eGFR 45) has a potassium of 5.8 mEq/L. She is currently on lisinopril. Which antihypertensive medication is most appropriate to add?",
    "options": {
      "A": "Spironolactone",
      "B": "Amlodipine",
      "C": "Hydrochlorothiazide",
      "D": "Atenolol"
    },
    "answer": "B",
    "explanation": "With hyperkalemia (K+ 5.8) and CKD, potassium-sparing diuretics (spironolactone) are contraindicated. Thiazides lose efficacy at eGFR <30. Calcium channel blockers (amlodipine) are potassium-neutral and effective at all GFR levels."
  },
  {
    "id": 22,
    "chapter": 3,
    "domain": "Cardiology",
    "question": "A hypertensive emergency is defined as severely elevated blood pressure (usually >180/120) with which of the following?",
    "options": {
      "A": "Headache and blurred vision without end-organ damage",
      "B": "Evidence of acute end-organ damage (hypertensive encephalopathy, AKI, or aortic dissection)",
      "C": "BP >200/120 on two separate readings",
      "D": "Need for hospitalization regardless of end-organ damage"
    },
    "answer": "B",
    "explanation": "Hypertensive emergency (vs. urgency) is defined by acute target-organ damage: hypertensive encephalopathy, acute kidney injury, aortic dissection, pulmonary edema, retinal hemorrhages, or eclampsia. Treatment requires IV agents with controlled BP reduction (not >25% in first hour)."
  },
  {
    "id": 23,
    "chapter": 3,
    "domain": "Cardiology",
    "question": "Which of the following statements about renal artery stenosis as a cause of secondary hypertension is correct?",
    "options": {
      "A": "It most commonly presents in elderly men with atherosclerosis",
      "B": "It is most commonly caused by fibromuscular dysplasia in elderly patients",
      "C": "Renin levels are typically low",
      "D": "ACE inhibitors are the preferred long-term treatment"
    },
    "answer": "A",
    "explanation": "Atherosclerotic renal artery stenosis is the most common cause (>90%), predominantly in older patients with cardiovascular risk factors. Fibromuscular dysplasia affects younger women. Renin levels are elevated. ACE inhibitors/ARBs can worsen renal function in bilateral stenosis."
  },
  {
    "id": 24,
    "chapter": 3,
    "domain": "Cardiology",
    "question": "A 38-year-old woman has hypertension with hypokalemia, metabolic alkalosis, and suppressed renin. CT abdomen shows a 2 cm left adrenal adenoma. The diagnosis is:",
    "options": {
      "A": "Pheochromocytoma",
      "B": "Primary hyperaldosteronism (Conn syndrome)",
      "C": "Cushing syndrome",
      "D": "Renovascular hypertension"
    },
    "answer": "B",
    "explanation": "Conn syndrome (primary hyperaldosteronism) presents with hypertension + hypokalemia + metabolic alkalosis + low renin (aldosterone autonomously secreted, suppresses renin). An adrenal adenoma (aldosteronoma) on CT confirms the diagnosis."
  },
  {
    "id": 25,
    "chapter": 3,
    "domain": "Cardiology",
    "question": "Which antihypertensive agent is preferred in a patient with hypertension and recent myocardial infarction?",
    "options": {
      "A": "Calcium channel blocker",
      "B": "Thiazide diuretic",
      "C": "Beta-blocker and ACE inhibitor",
      "D": "Alpha-blocker"
    },
    "answer": "C",
    "explanation": "Post-MI, beta-blockers reduce mortality by decreasing sympathetic drive and preventing ventricular remodeling. ACE inhibitors reduce mortality by blocking the RAAS and preventing ventricular remodeling. Both are Class I recommendations post-MI."
  },
  {
    "id": 26,
    "chapter": 3,
    "domain": "Cardiology",
    "question": "A patient's 24-hour ambulatory blood pressure monitoring shows daytime BP of 142/90 mmHg but office BP consistently 162/100 mmHg. This pattern is best described as:",
    "options": {
      "A": "Masked hypertension",
      "B": "White coat hypertension",
      "C": "Nocturnal hypertension",
      "D": "Sustained hypertension"
    },
    "answer": "B",
    "explanation": "White coat hypertension: elevated office BP with normal out-of-office (ambulatory) BP. It occurs due to the stress response in the clinical setting. Masked hypertension is the opposite \u2014 normal office BP with elevated ambulatory readings."
  },
  {
    "id": 27,
    "chapter": 4,
    "domain": "Cardiology",
    "question": "A 62-year-old man presents with crushing substernal chest pain for 90 minutes. ECG shows 3 mm ST elevations in V1\u2013V4 with reciprocal depressions in II, III, aVF. Troponin I is 8.2 ng/mL. The most important next step is:",
    "options": {
      "A": "Administer IV thrombolytics immediately",
      "B": "Activate the cardiac catheterization lab for primary PCI within 90 minutes",
      "C": "Start heparin and obtain serial ECGs every 30 minutes",
      "D": "Administer aspirin and nitrates, then transfer to ICU"
    },
    "answer": "B",
    "explanation": "For STEMI with symptom onset <12 hours, primary PCI is the preferred reperfusion strategy with a door-to-balloon time goal of \u226490 minutes (\u226460 min if directly presenting to PCI-capable center). Thrombolytics are reserved for when PCI cannot be achieved within 120 minutes."
  },
  {
    "id": 28,
    "chapter": 4,
    "domain": "Cardiology",
    "question": "A 55-year-old diabetic woman presents with nausea and jaw pain for 6 hours. ECG shows new LBBB. Troponin is elevated at 2.1 ng/mL. Which coronary artery is most likely occluded given these findings?",
    "options": {
      "A": "Right coronary artery",
      "B": "Left circumflex artery",
      "C": "Left anterior descending artery",
      "D": "Left main coronary artery"
    },
    "answer": "C",
    "explanation": "New LBBB in the context of ACS is treated as a STEMI equivalent. LBBB suggests significant LAD territory ischemia as the LAD supplies the interventricular septum and anterior LV wall through septal perforators and diagonal branches. Women and diabetics often present atypically."
  },
  {
    "id": 29,
    "chapter": 4,
    "domain": "Cardiology",
    "question": "A patient with NSTEMI is treated with aspirin, ticagrelor, and heparin. Which additional medication has been shown to reduce mortality in NSTEMI/ACS?",
    "options": {
      "A": "High-intensity statin therapy",
      "B": "Oral nitrates for 12 months",
      "C": "Calcium channel blocker",
      "D": "Digoxin"
    },
    "answer": "A",
    "explanation": "High-intensity statin therapy (atorvastatin 40\u201380 mg or rosuvastatin 20\u201340 mg) reduces mortality in ACS through plaque-stabilizing (pleiotropic) effects beyond LDL lowering. It should be started or continued regardless of baseline LDL."
  },
  {
    "id": 30,
    "chapter": 4,
    "domain": "Cardiology",
    "question": "Dual antiplatelet therapy (aspirin + P2Y12 inhibitor) after drug-eluting stent placement for ACS is recommended for how long?",
    "options": {
      "A": "1 month",
      "B": "6 months",
      "C": "At least 12 months",
      "D": "Indefinitely"
    },
    "answer": "C",
    "explanation": "After DES placement for ACS, dual antiplatelet therapy (DAPT) with aspirin + a P2Y12 inhibitor (ticagrelor or clopidogrel) is recommended for at least 12 months to prevent stent thrombosis. Duration may be extended in high-thrombotic-risk patients."
  },
  {
    "id": 31,
    "chapter": 4,
    "domain": "Cardiology",
    "question": "A 70-year-old man presents 6 hours after STEMI. He was successfully treated with primary PCI. His echocardiogram shows EF of 35%. Which medication has demonstrated mortality benefit in this situation?",
    "options": {
      "A": "Nitrates",
      "B": "Amlodipine",
      "C": "ACE inhibitor and beta-blocker",
      "D": "Digoxin"
    },
    "answer": "C",
    "explanation": "Post-STEMI with reduced EF (\u226440%), ACE inhibitors (or ARBs if ACE-intolerant) reduce mortality by preventing ventricular remodeling, and beta-blockers reduce sudden cardiac death and reinfarction. Both are Class I recommendations."
  },
  {
    "id": 32,
    "chapter": 4,
    "domain": "Cardiology",
    "question": "A 48-year-old man has stable angina with exertional chest pain for 3 months. Stress testing shows moderate ischemia in the LAD territory. He is on aspirin, a beta-blocker, and a statin. The next best step is:",
    "options": {
      "A": "Proceed to coronary angiography and revascularization",
      "B": "Add a long-acting nitrate and reassess in 3 months",
      "C": "Initiate ranolazine",
      "D": "Refer for CABG"
    },
    "answer": "A",
    "explanation": "Moderate to large areas of ischemia on stress testing (\u226510% of myocardium) indicate high-risk stable CAD. Coronary angiography should be performed to define anatomy and guide revascularization (PCI vs CABG), which improves symptom control and may improve survival in high-risk subsets."
  },
  {
    "id": 33,
    "chapter": 4,
    "domain": "Cardiology",
    "question": "Plaque rupture in acute coronary syndrome most commonly occurs at which location within the atherosclerotic lesion?",
    "options": {
      "A": "The calcified core",
      "B": "The thin fibrous cap overlying a large lipid-rich core",
      "C": "The adventitia of the vessel wall",
      "D": "At the site of prior stent placement"
    },
    "answer": "B",
    "explanation": "Vulnerable plaques have large lipid cores, thin fibrous caps (<65 \u03bcm), and abundant inflammatory cells (macrophages). Matrix metalloproteinases secreted by macrophages degrade the cap, leading to rupture, platelet aggregation, and thrombosis."
  },
  {
    "id": 34,
    "chapter": 4,
    "domain": "Cardiology",
    "question": "A patient develops ventricular fibrillation 20 minutes after STEMI. The most appropriate immediate intervention is:",
    "options": {
      "A": "IV amiodarone 150 mg bolus",
      "B": "Immediate unsynchronized defibrillation",
      "C": "Synchronized cardioversion at 200 J",
      "D": "IV lidocaine 1 mg/kg"
    },
    "answer": "B",
    "explanation": "VF is a pulseless rhythm requiring immediate unsynchronized defibrillation (200 J biphasic). There is no pulse to synchronize to. CPR should resume immediately after the shock. Amiodarone is used after failed defibrillation attempts."
  },
  {
    "id": 35,
    "chapter": 4,
    "domain": "Cardiology",
    "question": "Troponin elevation in NSTEMI is best explained by:",
    "options": {
      "A": "Myocardial necrosis from prolonged ischemia",
      "B": "Transient vasospasm without cell death",
      "C": "Demand ischemia only",
      "D": "Pericardial inflammation"
    },
    "answer": "A",
    "explanation": "In NSTEMI (vs. unstable angina), there is myocardial necrosis \u2014 sufficient to cause troponin release but without complete occlusion of the coronary artery. The NSTEMI-unstable angina distinction is made retrospectively based on troponin elevation."
  },
  {
    "id": 36,
    "chapter": 4,
    "domain": "Cardiology",
    "question": "Clopidogrel is a prodrug metabolized by which enzyme to its active form?",
    "options": {
      "A": "CYP2D6",
      "B": "CYP3A4",
      "C": "CYP2C19",
      "D": "CYP1A2"
    },
    "answer": "C",
    "explanation": "Clopidogrel requires hepatic conversion to its active metabolite primarily by CYP2C19. Poor metabolizers (CYP2C19 loss-of-function alleles) have reduced platelet inhibition and higher rates of cardiovascular events. Ticagrelor does not require hepatic activation and is preferred in ACS."
  },
  {
    "id": 37,
    "chapter": 4,
    "domain": "Cardiology",
    "question": "A patient presents with STEMI and cardiogenic shock. His BP is 80/50, HR 120, and he has bilateral crackles. The most appropriate mechanical support device to consider is:",
    "options": {
      "A": "Intra-aortic balloon pump",
      "B": "Impella device",
      "C": "External cardiac massage",
      "D": "Dobutamine infusion alone"
    },
    "answer": "B",
    "explanation": "For cardiogenic shock complicating STEMI, the Impella (axial flow pump) provides more robust hemodynamic support than IABP. However, early revascularization remains the priority. IABP showed no mortality benefit in IABP-SHOCK II trial. Impella is now preferred for mechanical circulatory support."
  },
  {
    "id": 38,
    "chapter": 4,
    "domain": "Cardiology",
    "question": "A right ventricular infarction typically occurs in the setting of occlusion of which artery?",
    "options": {
      "A": "Left anterior descending artery",
      "B": "Right coronary artery (proximal)",
      "C": "Left circumflex artery",
      "D": "Obtuse marginal artery"
    },
    "answer": "B",
    "explanation": "The right ventricle is supplied by the RCA (in 85% of right-dominant circulations). Proximal RCA occlusion causes inferior STEMI plus RV infarction. Classic triad: hypotension, JVD, and clear lung fields. Treatment: IV fluids (to maintain RV preload) \u2014 avoid nitrates and diuretics."
  },
  {
    "id": 39,
    "chapter": 5,
    "domain": "Cardiology",
    "question": "A 68-year-old man with known heart failure has LVEF of 30%. He is on lisinopril and carvedilol. His BNP is 850 pg/mL and he has 2+ pitting edema. Which additional medication has proven mortality benefit in HFrEF?",
    "options": {
      "A": "Digoxin",
      "B": "Spironolactone (MRA)",
      "C": "Hydralazine only",
      "D": "Nitrates only"
    },
    "answer": "B",
    "explanation": "Mineralocorticoid receptor antagonists (spironolactone, eplerenone) reduce mortality in HFrEF by ~30% (RALES, EPHESUS trials). They block aldosterone-mediated fibrosis and sodium retention. The 'quadruple therapy' for HFrEF is: ACE inhibitor/ARNI + beta-blocker + MRA + SGLT2 inhibitor."
  },
  {
    "id": 40,
    "chapter": 5,
    "domain": "Cardiology",
    "question": "The PARADIGM-HF trial demonstrated that sacubitril/valsartan (ARNI) reduced cardiovascular mortality compared to enalapril in HFrEF. What is sacubitril's mechanism?",
    "options": {
      "A": "Angiotensin receptor blockade",
      "B": "Neprilysin inhibition \u2192 increased natriuretic peptides",
      "C": "Direct vasodilation",
      "D": "Beta-1 receptor partial agonism"
    },
    "answer": "B",
    "explanation": "Sacubitril inhibits neprilysin, the enzyme that degrades natriuretic peptides (BNP, ANP). This increases natriuretic peptide levels, promoting vasodilation, natriuresis, and anti-fibrotic effects. Combined with valsartan (ARB) to prevent angiotensin II accumulation. Cannot be combined with ACE inhibitors."
  },
  {
    "id": 41,
    "chapter": 5,
    "domain": "Cardiology",
    "question": "A patient with HFrEF (EF 28%) remains symptomatic (NYHA Class III) on maximally tolerated doses of lisinopril, carvedilol, and spironolactone. His LBBB has QRS duration of 155 ms. Which intervention is indicated?",
    "options": {
      "A": "Increase diuretic dose",
      "B": "Cardiac resynchronization therapy (CRT)",
      "C": "Digoxin",
      "D": "Heart transplant listing immediately"
    },
    "answer": "B",
    "explanation": "CRT is indicated in HFrEF (EF \u226435%), NYHA Class II\u2013III, LBBB with QRS \u2265150 ms, on optimal medical therapy. CRT improves EF, symptoms, hospitalization, and mortality by resynchronizing ventricular contraction. QRS \u2265150 ms with LBBB morphology has the strongest evidence."
  },
  {
    "id": 42,
    "chapter": 5,
    "domain": "Cardiology",
    "question": "A 72-year-old woman has heart failure with preserved ejection fraction (HFpEF, EF 58%). She has uncontrolled hypertension and atrial fibrillation. Which of the following has demonstrated mortality benefit in HFpEF?",
    "options": {
      "A": "ACE inhibitors (CHARM-Preserved trial)",
      "B": "Beta-blockers",
      "C": "SGLT2 inhibitors (EMPEROR-Preserved trial)",
      "D": "ARBs (I-PRESERVE trial)"
    },
    "answer": "C",
    "explanation": "SGLT2 inhibitors (empagliflozin \u2014 EMPEROR-Preserved; dapagliflozin \u2014 DELIVER) are the first medications to demonstrate a reduction in HF hospitalizations in HFpEF. CHARM-Preserved and I-PRESERVE showed neutral mortality results with ARBs/ACE-I in HFpEF."
  },
  {
    "id": 43,
    "chapter": 5,
    "domain": "Cardiology",
    "question": "A patient with acute decompensated heart failure is admitted with volume overload and reduced cardiac output. IV furosemide is initiated. Which parameter best monitors the adequacy of diuretic response?",
    "options": {
      "A": "Daily chest X-ray",
      "B": "Urine output of at least 100\u2013150 mL/hour in the first 6 hours",
      "C": "Daily BNP levels",
      "D": "Daily body weight and fluid balance"
    },
    "answer": "D",
    "explanation": "Daily weights and fluid balance are the primary monitoring tools for diuretic response in ADHF. A target of 0.5\u20131 kg weight loss per day indicates adequate decongestion. Urine output targets help assess acute response. BNP can guide therapy but is not the primary monitoring parameter."
  },
  {
    "id": 44,
    "chapter": 5,
    "domain": "Cardiology",
    "question": "Which beta-blocker has the strongest evidence for reducing mortality in HFrEF and is the preferred agent?",
    "options": {
      "A": "Metoprolol succinate, carvedilol, or bisoprolol",
      "B": "Atenolol",
      "C": "Propranolol",
      "D": "Labetalol"
    },
    "answer": "A",
    "explanation": "Only three beta-blockers have proven mortality benefit in HFrEF clinical trials: carvedilol (COPERNICUS/US Carvedilol), metoprolol succinate (MERIT-HF), and bisoprolol (CIBIS-II). Atenolol, propranolol, and labetalol have not demonstrated mortality benefit in HF."
  },
  {
    "id": 45,
    "chapter": 5,
    "domain": "Cardiology",
    "question": "A patient with HFrEF is started on carvedilol. Two weeks later, he returns with worsening dyspnea and increased edema. The most appropriate response is:",
    "options": {
      "A": "Discontinue carvedilol immediately",
      "B": "Increase the carvedilol dose as planned",
      "C": "Adjust diuretic therapy while maintaining carvedilol, reassess",
      "D": "Switch to metoprolol"
    },
    "answer": "C",
    "explanation": "Beta-blockers transiently worsen fluid retention in the first 2\u20134 weeks due to reduced cardiac output. The appropriate response is to optimize diuresis while maintaining the beta-blocker, not to discontinue it. Abrupt discontinuation can cause rebound tachycardia and clinical deterioration."
  },
  {
    "id": 46,
    "chapter": 5,
    "domain": "Cardiology",
    "question": "In which of the following conditions is acute heart failure most likely to be precipitated?",
    "options": {
      "A": "Medication compliance in a stable HF patient",
      "B": "New rapid atrial fibrillation with RVR in a patient with HFrEF",
      "C": "Stable hypertension",
      "D": "Mild anemia in a patient without prior heart disease"
    },
    "answer": "B",
    "explanation": "New-onset rapid atrial fibrillation is among the most common precipitants of acute decompensated heart failure. Loss of atrial kick reduces cardiac output by 15\u201325%, and rapid ventricular rate reduces diastolic filling time \u2014 particularly devastating in HFrEF or HFpEF."
  },
  {
    "id": 47,
    "chapter": 5,
    "domain": "Cardiology",
    "question": "A 65-year-old man with HFrEF (EF 25%) is intolerant to ACE inhibitors and ARBs due to renal dysfunction. Which combination is an appropriate alternative with proven mortality benefit?",
    "options": {
      "A": "Hydralazine plus isosorbide dinitrate",
      "B": "Amlodipine plus furosemide",
      "C": "Digoxin plus spironolactone",
      "D": "Nitrates plus diltiazem"
    },
    "answer": "A",
    "explanation": "The hydralazine-isosorbide dinitrate combination (V-HeFT, A-HeFT trials) reduces mortality in HFrEF, particularly in Black patients. It is indicated when ACE inhibitors and ARBs are contraindicated (bilateral renal artery stenosis, severe hyperkalemia, renal failure). It is not as effective as ACEi/ARB/ARNI."
  },
  {
    "id": 48,
    "chapter": 5,
    "domain": "Cardiology",
    "question": "Which hemodynamic profile in acute heart failure is associated with the highest in-hospital mortality?",
    "options": {
      "A": "Wet and warm",
      "B": "Dry and warm",
      "C": "Wet and cold",
      "D": "Dry and cold"
    },
    "answer": "C",
    "explanation": "The Nohria-Stevenson classification: Wet (congested) + Cold (hypoperfused) = highest mortality. This profile indicates both volume overload and cardiogenic shock \u2014 requires simultaneous decongestion and hemodynamic support (inotropes or mechanical circulatory support)."
  },
  {
    "id": 49,
    "chapter": 5,
    "domain": "Cardiology",
    "question": "An SGLT2 inhibitor is added to a patient with HFrEF on quadruple therapy. The primary mechanism by which SGLT2 inhibitors benefit heart failure is:",
    "options": {
      "A": "Reduction in blood glucose",
      "B": "Osmotic diuresis, reduced preload/afterload, and cardioprotective metabolic effects",
      "C": "Direct inhibition of cardiac fibrosis",
      "D": "Aldosterone blockade"
    },
    "answer": "B",
    "explanation": "SGLT2 inhibitors (dapagliflozin, empagliflozin) reduce HF hospitalizations and mortality through glucose-independent mechanisms: osmotic and natriuretic diuresis, reduced preload/afterload, ketone body utilization (metabolic effect), and reduced cardiac inflammation/fibrosis. The benefit extends to HFpEF."
  },
  {
    "id": 50,
    "chapter": 5,
    "domain": "Cardiology",
    "question": "A patient with dilated cardiomyopathy (EF 20%) develops sustained ventricular tachycardia with hemodynamic instability. After stabilization, which device is most appropriate?",
    "options": {
      "A": "Wearable cardioverter-defibrillator only",
      "B": "Implantable cardioverter-defibrillator (ICD)",
      "C": "Cardiac resynchronization therapy without defibrillation (CRT-P)",
      "D": "EP ablation as primary treatment"
    },
    "answer": "B",
    "explanation": "ICD implantation is indicated for secondary prevention of sudden cardiac death after sustained VT/VF in patients with structural heart disease. For primary prevention (EF \u226435%, NYHA II\u2013III on optimal therapy), ICD is indicated after \u22653 months of optimal medical therapy."
  },
  {
    "id": 51,
    "chapter": 6,
    "domain": "Cardiology",
    "question": "A 72-year-old man with hypertension and diabetes presents with palpitations. ECG shows irregularly irregular rhythm with no discernible P waves and ventricular rate of 130 bpm. His CHA2DS2-VASc score is 4. What is the threshold for anticoagulation in this patient?",
    "options": {
      "A": "Score \u22651 in men, \u22652 in women",
      "B": "Score \u22652 in men, \u22653 in women",
      "C": "Score \u22653 regardless of sex",
      "D": "All patients with AF require anticoagulation"
    },
    "answer": "A",
    "explanation": "ACC/AHA guidelines: anticoagulation is recommended when CHA2DS2-VASc \u22652 in men or \u22653 in women (Class I); reasonable when score is 1 in men or 2 in women (Class IIa). This patient has a score of 4 (HTN 1, DM 1, age 65\u201374 = 1, male sex = 0, but wait \u2014 age 72 = 1 point) \u2014 clearly warrants anticoagulation."
  },
  {
    "id": 52,
    "chapter": 6,
    "domain": "Cardiology",
    "question": "A 65-year-old woman with atrial fibrillation and no valvular heart disease requires anticoagulation. Which oral anticoagulant is preferred over warfarin?",
    "options": {
      "A": "Direct oral anticoagulants (DOACs) such as apixaban or rivaroxaban",
      "B": "Warfarin due to reversibility",
      "C": "Aspirin plus clopidogrel",
      "D": "Dabigatran only if CrCl >80 mL/min"
    },
    "answer": "A",
    "explanation": "DOACs (apixaban, rivaroxaban, dabigatran, edoxaban) are preferred over warfarin in non-valvular AF due to similar or superior stroke reduction, lower intracranial hemorrhage risk, no need for routine monitoring, and fixed dosing. Warfarin remains preferred for mechanical heart valves and rheumatic mitral stenosis."
  },
  {
    "id": 53,
    "chapter": 6,
    "domain": "Cardiology",
    "question": "A patient with symptomatic atrial fibrillation undergoes electrical cardioversion. Which of the following is a prerequisite before cardioversion if AF duration is unknown or >48 hours?",
    "options": {
      "A": "Echocardiogram showing normal LV function",
      "B": "Therapeutic anticoagulation for \u22653 weeks OR TEE to rule out left atrial thrombus",
      "C": "Rate control to <80 bpm for 24 hours",
      "D": "Normal thyroid function tests"
    },
    "answer": "B",
    "explanation": "Before cardioversion for AF of unknown duration or >48 hours, either (1) therapeutic anticoagulation for \u22653 weeks (to resolve any existing thrombus), or (2) TEE to exclude LAA thrombus, followed by immediate cardioversion. Cardioversion can restore sinus rhythm and then cause embolization of existing thrombus."
  },
  {
    "id": 54,
    "chapter": 6,
    "domain": "Cardiology",
    "question": "A patient has symptomatic Wolf-Parkinson-White syndrome with pre-excitation on ECG (delta waves). He develops AF with rapid ventricular response. Which medication is contraindicated?",
    "options": {
      "A": "Procainamide",
      "B": "IV adenosine",
      "C": "Ibutilide",
      "D": "Synchronized cardioversion"
    },
    "answer": "B",
    "explanation": "In WPW with AF, AV-nodal blocking agents (adenosine, beta-blockers, digoxin, calcium channel blockers) are contraindicated. They block the AV node, forcing conduction exclusively through the accessory pathway, which can conduct rapidly \u2192 ventricular fibrillation. Procainamide (slows accessory pathway) or cardioversion is preferred."
  },
  {
    "id": 55,
    "chapter": 6,
    "domain": "Cardiology",
    "question": "A 45-year-old man has narrow-complex tachycardia at 170 bpm that terminates abruptly with vagal maneuvers. The most likely diagnosis is:",
    "options": {
      "A": "Atrial flutter with 2:1 block",
      "B": "AV nodal reentrant tachycardia (AVNRT)",
      "C": "Atrial fibrillation",
      "D": "Ventricular tachycardia"
    },
    "answer": "B",
    "explanation": "AVNRT is the most common SVT \u2014 narrow complex, regular, rate 150\u2013250 bpm, abrupt onset/termination, responds to vagal maneuvers or adenosine. It is caused by a reentrant circuit within the AV node (slow and fast pathways)."
  },
  {
    "id": 56,
    "chapter": 6,
    "domain": "Cardiology",
    "question": "A patient develops a wide-complex tachycardia at 180 bpm. He is hemodynamically unstable with BP 80/50. The most appropriate immediate treatment is:",
    "options": {
      "A": "IV adenosine 6 mg",
      "B": "IV amiodarone infusion",
      "C": "Synchronized DC cardioversion",
      "D": "IV procainamide 1 g over 1 hour"
    },
    "answer": "C",
    "explanation": "Any hemodynamically unstable tachycardia (hypotension, altered consciousness, pulmonary edema) requires immediate synchronized DC cardioversion regardless of mechanism. Pharmacologic treatment is inappropriate when the patient is unstable."
  },
  {
    "id": 57,
    "chapter": 6,
    "domain": "Cardiology",
    "question": "A 68-year-old man with sinus bradycardia (HR 38 bpm) has syncope while mowing his lawn. ECG shows a 3-second pause after a P wave. Which intervention is most appropriate?",
    "options": {
      "A": "Oral theophylline",
      "B": "Atropine 1 mg IV",
      "C": "Permanent pacemaker",
      "D": "Cardiac monitoring only"
    },
    "answer": "C",
    "explanation": "Symptomatic sinus bradycardia with pauses (causing syncope) is a Class I indication for permanent pacemaker implantation. Transient atropine treats the acute episode, but pacemaker is the definitive treatment for intrinsic sinus node dysfunction causing symptoms."
  },
  {
    "id": 58,
    "chapter": 6,
    "domain": "Cardiology",
    "question": "Torsades de pointes is associated with which ECG finding and electrolyte abnormality?",
    "options": {
      "A": "Short QT interval and hyperkalemia",
      "B": "Prolonged QT interval and hypokalemia or hypomagnesemia",
      "C": "Delta waves and hypercalcemia",
      "D": "Epsilon waves and hyperkalemia"
    },
    "answer": "B",
    "explanation": "Torsades de pointes is a polymorphic VT associated with prolonged QT interval (QTc >500 ms). Key precipitants: hypokalemia, hypomagnesemia, drugs (antiarrhythmics, antipsychotics, macrolides, fluoroquinolones), congenital long QT syndrome. Treatment: IV magnesium sulfate."
  },
  {
    "id": 59,
    "chapter": 6,
    "domain": "Cardiology",
    "question": "Atrial flutter typically presents with which ventricular rate in patients without AV node dysfunction and not on rate-controlling medications?",
    "options": {
      "A": "60\u201380 bpm",
      "B": "100\u2013110 bpm",
      "C": "150 bpm (2:1 AV block)",
      "D": "200\u2013250 bpm"
    },
    "answer": "C",
    "explanation": "Atrial flutter has an atrial rate of ~300 bpm. The AV node physiologically conducts at 2:1, giving a ventricular rate of ~150 bpm. This classic presentation (regular tachycardia at exactly 150 bpm with sawtooth flutter waves in II/III/aVF) should prompt consideration of flutter."
  },
  {
    "id": 60,
    "chapter": 6,
    "domain": "Cardiology",
    "question": "A patient with new atrial fibrillation and rapid ventricular response (HR 140) has known severe LV dysfunction (EF 20%). Which rate-control agent is preferred?",
    "options": {
      "A": "Diltiazem",
      "B": "Metoprolol",
      "C": "Digoxin",
      "D": "Verapamil"
    },
    "answer": "C",
    "explanation": "In AF with severely reduced EF, non-dihydropyridine calcium channel blockers (diltiazem, verapamil) are contraindicated due to negative inotropy that can cause acute decompensation. Digoxin provides rate control through vagal mechanism without negative inotropic effect and is preferred in severe HF. Beta-blockers can be used cautiously."
  },
  {
    "id": 61,
    "chapter": 7,
    "domain": "Cardiology",
    "question": "A 75-year-old woman has exertional dyspnea and syncope. Cardiac exam reveals a harsh systolic ejection murmur radiating to the carotids, diminished S2, and delayed carotid upstroke (pulsus parvus et tardus). The most likely diagnosis is:",
    "options": {
      "A": "Mitral regurgitation",
      "B": "Aortic stenosis",
      "C": "Hypertrophic obstructive cardiomyopathy",
      "D": "Pulmonary stenosis"
    },
    "answer": "B",
    "explanation": "Severe aortic stenosis classically presents with the triad: angina, syncope, and dyspnea. Exam: harsh systolic ejection murmur radiating to carotids, diminished/absent A2, delayed carotid upstroke (pulsus parvus et tardus). Mean gradient >40 mmHg or valve area <1.0 cm\u00b2 defines severe AS."
  },
  {
    "id": 62,
    "chapter": 7,
    "domain": "Cardiology",
    "question": "A 60-year-old man with severe symptomatic aortic stenosis (AVA 0.7 cm\u00b2, EF 55%) undergoes evaluation. He has a history of prior CABG and is deemed high surgical risk. Which treatment is preferred?",
    "options": {
      "A": "Medical management with digoxin",
      "B": "Balloon aortic valvuloplasty",
      "C": "Transcatheter aortic valve replacement (TAVR)",
      "D": "Surgical AVR (SAVR)"
    },
    "answer": "C",
    "explanation": "TAVR is indicated for symptomatic severe AS in high-surgical-risk patients (PARTNER 2, SURTAVI trials) and has been extended to intermediate and low-risk patients (PARTNER 3). Prior CABG significantly increases surgical risk. TAVR is delivered via femoral artery in most cases."
  },
  {
    "id": 63,
    "chapter": 7,
    "domain": "Cardiology",
    "question": "A 35-year-old woman with a history of rheumatic fever has a diastolic rumbling murmur heard best at the apex with an opening snap. Her ECG shows left atrial enlargement. The most likely diagnosis is:",
    "options": {
      "A": "Aortic regurgitation",
      "B": "Mitral regurgitation",
      "C": "Mitral stenosis",
      "D": "Tricuspid stenosis"
    },
    "answer": "C",
    "explanation": "Mitral stenosis: diastolic rumbling murmur with opening snap (pliable valve), best heard at apex with bell. Causes: predominantly rheumatic fever. ECG: left atrial enlargement (P mitrale). Complications: pulmonary hypertension, AF, systemic embolism from LA thrombus."
  },
  {
    "id": 64,
    "chapter": 7,
    "domain": "Cardiology",
    "question": "A 28-year-old woman with Marfan syndrome has a midsystolic click followed by a late systolic murmur at the apex. Echocardiography shows posterior leaflet prolapse with 2+ mitral regurgitation. What is the appropriate management?",
    "options": {
      "A": "Immediate mitral valve repair",
      "B": "Serial echocardiography and observation",
      "C": "Beta-blocker for symptom relief and surveillance echo every 1\u20132 years",
      "D": "Mitral valve replacement"
    },
    "answer": "C",
    "explanation": "Mitral valve prolapse with mild-moderate MR in an asymptomatic patient is managed conservatively with serial echocardiography (every 1\u20132 years for moderate MR). Beta-blockers reduce palpitations and chest pain. Surgery is indicated for severe symptomatic MR or EF <60% or LV end-systolic diameter >40 mm."
  },
  {
    "id": 65,
    "chapter": 7,
    "domain": "Cardiology",
    "question": "The murmur of aortic regurgitation is best described as:",
    "options": {
      "A": "Systolic ejection murmur radiating to the neck",
      "B": "Holodiastolic decrescendo murmur best heard at left sternal border",
      "C": "Diastolic rumble at the apex with opening snap",
      "D": "Midsystolic click followed by late systolic murmur"
    },
    "answer": "B",
    "explanation": "Aortic regurgitation produces a high-pitched, blowing, decrescendo diastolic murmur beginning immediately after A2, heard best at the left sternal border with the patient leaning forward in held expiration. Severe AR also produces an Austin Flint murmur (low-pitched diastolic rumble at apex from regurgitant jet vibrating the anterior mitral leaflet)."
  },
  {
    "id": 66,
    "chapter": 7,
    "domain": "Cardiology",
    "question": "A 55-year-old man with severe aortic regurgitation has an ejection fraction of 48% and is asymptomatic. Which of the following is the most appropriate management?",
    "options": {
      "A": "Aortic valve surgery is indicated due to EF <50%",
      "B": "Continue medical management with ACE inhibitor and reassess in 6 months",
      "C": "Proceed with surgery only when symptoms develop",
      "D": "Initiate digoxin and reassess annually"
    },
    "answer": "A",
    "explanation": "In chronic severe AR, surgical indications include: (1) symptoms, (2) EF <55%, or (3) LV end-systolic diameter >50 mm. An EF of 48% (<50% threshold per some guidelines, <55% per others) represents an indication for surgery before further deterioration."
  },
  {
    "id": 67,
    "chapter": 7,
    "domain": "Cardiology",
    "question": "Patients with mechanical heart valves require anticoagulation with which agent?",
    "options": {
      "A": "Aspirin alone",
      "B": "Warfarin with target INR 2.5\u20133.5",
      "C": "Direct oral anticoagulants (apixaban)",
      "D": "Clopidogrel"
    },
    "answer": "B",
    "explanation": "Mechanical heart valves require warfarin (vitamin K antagonist) with target INR 2.5\u20133.5 (mitral position) or 2.0\u20133.0 (aortic position). DOACs are contraindicated in mechanical valve patients (RE-ALIGN trial showed increased thromboembolism and bleeding with dabigatran)."
  },
  {
    "id": 68,
    "chapter": 7,
    "domain": "Cardiology",
    "question": "Which physical examination finding is associated with severe mitral regurgitation?",
    "options": {
      "A": "Midsystolic click at the apex",
      "B": "Holodiastolic murmur at the left sternal border",
      "C": "Holosystolic murmur at the apex radiating to the axilla",
      "D": "Ejection click at the right upper sternal border"
    },
    "answer": "C",
    "explanation": "Mitral regurgitation produces a holosystolic (pan-systolic) murmur at the apex radiating to the axilla, best heard with the diaphragm with the patient in left lateral decubitus position. Severe MR may cause a third heart sound (S3) due to rapid ventricular filling."
  },
  {
    "id": 69,
    "chapter": 8,
    "domain": "Pulmonology",
    "question": "A patient has a FEV1/FVC ratio of 0.65 on spirometry with post-bronchodilator improvement of <12%. The FVC is normal. This pattern is most consistent with:",
    "options": {
      "A": "Restrictive lung disease",
      "B": "Obstructive lung disease",
      "C": "Mixed obstructive-restrictive disease",
      "D": "Normal spirometry"
    },
    "answer": "B",
    "explanation": "Obstructive pattern: reduced FEV1/FVC ratio (<0.70 by GOLD criteria, <LLN by ATS criteria) with normal or preserved FVC. Reduced FEV1 with preserved FVC confirms obstruction. A post-bronchodilator improvement \u226512% AND \u2265200 mL is required to demonstrate reversibility (suggesting asthma)."
  },
  {
    "id": 70,
    "chapter": 8,
    "domain": "Pulmonology",
    "question": "The right lung has how many lobes and segments?",
    "options": {
      "A": "2 lobes, 8 segments",
      "B": "3 lobes, 10 segments",
      "C": "3 lobes, 8 segments",
      "D": "2 lobes, 10 segments"
    },
    "answer": "B",
    "explanation": "Right lung: 3 lobes (upper, middle, lower), 10 bronchopulmonary segments. Left lung: 2 lobes (upper with lingula, lower), 9\u201310 segments (lingula is equivalent to right middle lobe). The lingula is not a separate lobe in the left lung."
  },
  {
    "id": 71,
    "chapter": 8,
    "domain": "Pulmonology",
    "question": "Surfactant is produced by which cell type in the alveolus and what is its primary function?",
    "options": {
      "A": "Type I pneumocytes; gas exchange",
      "B": "Alveolar macrophages; phagocytosis",
      "C": "Type II pneumocytes; reduce alveolar surface tension",
      "D": "Clara cells; mucus secretion"
    },
    "answer": "C",
    "explanation": "Type II pneumocytes (granular pneumocytes) synthesize and secrete surfactant (phosphatidylcholine). Surfactant reduces surface tension in alveoli, preventing collapse (atelectasis) at end-expiration. Deficiency causes neonatal respiratory distress syndrome (hyaline membrane disease)."
  },
  {
    "id": 72,
    "chapter": 8,
    "domain": "Pulmonology",
    "question": "During normal quiet breathing, what is the primary muscle of inspiration?",
    "options": {
      "A": "External intercostals",
      "B": "Diaphragm",
      "C": "Sternocleidomastoid",
      "D": "Scalenes"
    },
    "answer": "B",
    "explanation": "The diaphragm is the primary muscle of inspiration, responsible for ~70% of tidal volume during quiet breathing. It is innervated by the phrenic nerve (C3, C4, C5 \u2014 'C3, 4, 5 keeps the diaphragm alive'). Accessory muscles (SCM, scalenes) are used during forced or labored breathing."
  },
  {
    "id": 73,
    "chapter": 8,
    "domain": "Pulmonology",
    "question": "A patient has a PaO2 of 60 mmHg on room air. Which of the following best distinguishes a V/Q mismatch from a shunt as the cause of hypoxemia?",
    "options": {
      "A": "Response to 100% supplemental oxygen",
      "B": "Elevated PaCO2",
      "C": "Reduced A-a gradient",
      "D": "Presence of bilateral infiltrates on CXR"
    },
    "answer": "A",
    "explanation": "100% O2 corrects V/Q mismatch (improving ventilation to underventilated units) but does NOT correct a true shunt (blood bypasses ventilated alveoli entirely \u2014 intracardiac R\u2192L or intrapulmonary). Shunt is confirmed when PaO2 fails to rise appropriately (>500 mmHg expected) with 100% O2."
  },
  {
    "id": 74,
    "chapter": 8,
    "domain": "Pulmonology",
    "question": "The carina is located at which vertebral level?",
    "options": {
      "A": "T2",
      "B": "T4",
      "C": "T6",
      "D": "T8"
    },
    "answer": "B",
    "explanation": "The carina (bifurcation of the trachea into right and left main bronchi) lies at the level of T4 (the angle of Louis/sternal angle). This landmark is important for ETT positioning \u2014 the tip should be 3\u20135 cm above the carina to prevent right mainstem intubation."
  },
  {
    "id": 75,
    "chapter": 9,
    "domain": "Pulmonology",
    "question": "A 65-year-old man with 40 pack-year smoking history presents with progressive dyspnea and chronic productive cough. Spirometry shows FEV1/FVC of 0.58, FEV1 48% predicted, with minimal bronchodilator response. His GOLD classification is:",
    "options": {
      "A": "GOLD 1 (Mild)",
      "B": "GOLD 2 (Moderate)",
      "C": "GOLD 3 (Severe)",
      "D": "GOLD 4 (Very Severe)"
    },
    "answer": "C",
    "explanation": "GOLD classification based on post-bronchodilator FEV1% predicted: GOLD 1 \u226580%, GOLD 2 50\u201379%, GOLD 3 30\u201349%, GOLD 4 <30%. FEV1 48% predicted = GOLD 3 (Severe). GOLD staging drives pharmacotherapy escalation."
  },
  {
    "id": 76,
    "chapter": 9,
    "domain": "Pulmonology",
    "question": "A COPD patient with FEV1 45% predicted has two exacerbations in the past year requiring oral steroids, no hospitalization, and significant dyspnea (mMRC 3). He is on LABA monotherapy. What is the most appropriate next step?",
    "options": {
      "A": "Add inhaled corticosteroid (ICS)",
      "B": "Add a long-acting muscarinic antagonist (LAMA)",
      "C": "Add LAMA + ICS triple therapy",
      "D": "Start roflumilast"
    },
    "answer": "C",
    "explanation": "Per GOLD 2024, for group E COPD (high exacerbation history + high symptoms), LABA+LAMA+ICS triple therapy is preferred over dual bronchodilator alone. This patient meets Group E criteria (\u22652 exacerbations/year, high symptoms). Triple therapy (e.g., budesonide/glycopyrronium/formoterol) reduces exacerbations vs. LABA/LAMA."
  },
  {
    "id": 77,
    "chapter": 9,
    "domain": "Pulmonology",
    "question": "A 35-year-old non-smoker woman presents with severe dyspnea and panacinar emphysema involving the lower lobes. Serum protein electrophoresis shows absent alpha-1 band. The diagnosis is:",
    "options": {
      "A": "Common variable immunodeficiency",
      "B": "Alpha-1 antitrypsin deficiency",
      "C": "Cystic fibrosis",
      "D": "Lymphangioleiomyomatosis"
    },
    "answer": "B",
    "explanation": "Alpha-1 antitrypsin deficiency causes panacinar (panlobular) emphysema predominantly in the lower lobes in young, non-smoking patients. AAT normally inhibits neutrophil elastase; without it, unopposed elastase destroys alveolar walls. PiZZ genotype is the most common severe phenotype."
  },
  {
    "id": 78,
    "chapter": 9,
    "domain": "Pulmonology",
    "question": "A 28-year-old woman has asthma. She has daytime symptoms 3 days per week, nighttime awakenings twice monthly, uses SABA twice weekly, and FEV1 82% predicted. Her asthma severity classification and appropriate step of therapy is:",
    "options": {
      "A": "Intermittent asthma \u2014 SABA PRN only (Step 1)",
      "B": "Mild persistent asthma \u2014 low-dose ICS (Step 2)",
      "C": "Moderate persistent asthma \u2014 medium-dose ICS + LABA (Step 3\u20134)",
      "D": "Severe persistent asthma \u2014 high-dose ICS + oral steroids (Step 5\u20136)"
    },
    "answer": "B",
    "explanation": "NAEPP classification: Mild persistent = daytime symptoms >2 days/week but not daily, nighttime awakenings 3\u20134\u00d7/month, SABA use >2 days/week. FEV1 \u226580% predicted. Step 2 therapy: low-dose ICS (preferred) or leukotriene modifier."
  },
  {
    "id": 79,
    "chapter": 9,
    "domain": "Pulmonology",
    "question": "Which of the following is the key mechanism differentiating COPD from asthma on spirometry?",
    "options": {
      "A": "Degree of airflow obstruction",
      "B": "Post-bronchodilator reversibility (\u226512% and \u2265200 mL improvement in FEV1)",
      "C": "Total lung capacity",
      "D": "DLCO"
    },
    "answer": "B",
    "explanation": "Post-bronchodilator reversibility is the key differentiating feature: asthma shows \u226512% AND \u2265200 mL improvement in FEV1 with bronchodilator (reversible obstruction), while COPD shows <12% improvement (fixed/irreversible obstruction). Overlap syndrome (ACO) can show features of both."
  },
  {
    "id": 80,
    "chapter": 9,
    "domain": "Pulmonology",
    "question": "A patient with COPD exacerbation is started on supplemental oxygen. His O2 saturation improves from 84% to 98%. Thirty minutes later, he becomes drowsy and his PaCO2 rises from 52 to 72 mmHg. The most likely mechanism is:",
    "options": {
      "A": "Oxygen toxicity to alveolar cells",
      "B": "Loss of hypoxic pulmonary vasoconstriction leading to V/Q mismatch, plus Haldane effect",
      "C": "Worsening pneumonia",
      "D": "Benzodiazepine accumulation"
    },
    "answer": "B",
    "explanation": "In hypercapnic COPD, excessive O2 causes: (1) loss of hypoxic drive (minor contribution), (2) reversal of hypoxic pulmonary vasoconstriction \u2192 worsened V/Q mismatch, and (3) Haldane effect (O2 displaces CO2 from hemoglobin). Target SpO2 88\u201392% in hypercapnic COPD to avoid CO2 retention."
  },
  {
    "id": 81,
    "chapter": 9,
    "domain": "Pulmonology",
    "question": "Which of the following inhalers is a short-acting muscarinic antagonist (SAMA) used primarily for acute COPD exacerbations?",
    "options": {
      "A": "Salmeterol",
      "B": "Ipratropium bromide",
      "C": "Tiotropium",
      "D": "Formoterol"
    },
    "answer": "B",
    "explanation": "Ipratropium is the short-acting muscarinic antagonist (SAMA), used in acute COPD exacerbations and as maintenance in mild COPD. Tiotropium is the long-acting muscarinic antagonist (LAMA) for maintenance. Salmeterol and formoterol are long-acting beta-2 agonists (LABAs)."
  },
  {
    "id": 82,
    "chapter": 9,
    "domain": "Pulmonology",
    "question": "A 52-year-old asthmatic woman develops worsening asthma control after starting a new medication for arthritis pain. Which medication most likely explains this?",
    "options": {
      "A": "Acetaminophen",
      "B": "Aspirin",
      "C": "Celecoxib",
      "D": "Colchicine"
    },
    "answer": "B",
    "explanation": "Aspirin/NSAID-exacerbated respiratory disease (AERD/Samter's triad): aspirin + asthma + nasal polyps. NSAIDs block COX-1, diverting arachidonic acid to the 5-LOX pathway \u2192 excess leukotrienes \u2192 bronchoconstriction. Celecoxib (selective COX-2 inhibitor) and acetaminophen are generally safe."
  },
  {
    "id": 83,
    "chapter": 9,
    "domain": "Pulmonology",
    "question": "Which of the following biologic agents targets the IL-5 pathway and is approved for severe eosinophilic asthma?",
    "options": {
      "A": "Omalizumab (anti-IgE)",
      "B": "Mepolizumab (anti-IL-5)",
      "C": "Dupilumab (anti-IL-4/IL-13)",
      "D": "Benralizumab targets IL-4 receptor"
    },
    "answer": "B",
    "explanation": "Mepolizumab (anti-IL-5 antibody) and benralizumab (anti-IL-5R\u03b1) target the eosinophilic pathway in severe asthma. Blood eosinophils \u2265300/\u03bcL predict response. Omalizumab targets IgE (allergic asthma). Dupilumab targets IL-4R\u03b1 (blocks IL-4 and IL-13) for atopic asthma."
  },
  {
    "id": 84,
    "chapter": 9,
    "domain": "Pulmonology",
    "question": "During an acute severe asthma exacerbation refractory to initial therapy, which intervention has the strongest evidence for improving outcomes?",
    "options": {
      "A": "IV aminophylline",
      "B": "Intravenous magnesium sulfate",
      "C": "Heliox",
      "D": "IV ketamine sedation"
    },
    "answer": "B",
    "explanation": "IV magnesium sulfate (2 g IV over 20 min) reduces hospitalizations and improves bronchospasm in acute severe asthma unresponsive to initial bronchodilators. It works by antagonizing calcium-mediated smooth muscle contraction. Aminophylline adds toxicity without benefit over modern therapy."
  },
  {
    "id": 85,
    "chapter": 10,
    "domain": "Pulmonology",
    "question": "A 68-year-old nursing home resident presents with productive cough, fever, and right lower lobe consolidation. Gram stain shows gram-positive lancet-shaped diplococci. The most appropriate empiric antibiotic is:",
    "options": {
      "A": "Vancomycin + piperacillin-tazobactam",
      "B": "Azithromycin alone",
      "C": "Amoxicillin-clavulanate or respiratory fluoroquinolone",
      "D": "Meropenem"
    },
    "answer": "C",
    "explanation": "This is community-acquired pneumonia (CAP) caused by S. pneumoniae (gram-positive lancet-shaped diplococci). For outpatient CAP with comorbidities: amoxicillin-clavulanate + macrolide, or respiratory fluoroquinolone (levofloxacin, moxifloxacin) monotherapy. CURB-65 or PSI score guides hospitalization decision."
  },
  {
    "id": 86,
    "chapter": 10,
    "domain": "Pulmonology",
    "question": "A 55-year-old intubated ICU patient develops a new fever, purulent secretions, and bilateral infiltrates 5 days after admission. His MRSA nasal swab is negative. Which empiric antibiotic regimen is most appropriate for ventilator-associated pneumonia (VAP)?",
    "options": {
      "A": "Vancomycin + piperacillin-tazobactam + amikacin",
      "B": "Piperacillin-tazobactam alone",
      "C": "Antipseudomonal beta-lactam \u00b1 vancomycin (MRSA coverage based on local prevalence)",
      "D": "Cefazolin + metronidazole"
    },
    "answer": "C",
    "explanation": "VAP empiric therapy targets gram-negative organisms including Pseudomonas: antipseudomonal beta-lactam (pip-tazo, cefepime, meropenem). Add MRSA coverage (vancomycin/linezolid) if MRSA prevalence >20% or risk factors present. Negative MRSA nasal swab has >90% NPV, allowing de-escalation."
  },
  {
    "id": 87,
    "chapter": 10,
    "domain": "Pulmonology",
    "question": "A 45-year-old man develops fever, pleuritic chest pain, and a left-sided pleural effusion 1 week after CAP treatment. Thoracentesis shows pH 7.15, glucose 45 mg/dL, LDH 3,500 U/L, and gram-negative rods on Gram stain. The next step is:",
    "options": {
      "A": "Continue antibiotics and repeat thoracentesis in 48 hours",
      "B": "Immediate chest tube drainage (tube thoracostomy)",
      "C": "Intrapleural tPA/DNase therapy",
      "D": "Video-assisted thoracoscopic surgery (VATS)"
    },
    "answer": "B",
    "explanation": "This is a complicated parapneumonic effusion (pH <7.2, glucose <60, LDH >1000) with positive Gram stain = empyema. Immediate chest tube drainage is mandatory. Intrapleural tPA+DNase (MIST2 trial) is used for loculated empyemas failing chest tube drainage. VATS for organized empyema."
  },
  {
    "id": 88,
    "chapter": 10,
    "domain": "Pulmonology",
    "question": "An immunocompromised patient with HIV (CD4 50) develops bilateral ground-glass opacities, progressive hypoxemia, and LDH 560 U/L. BAL shows cysts. The diagnosis and treatment are:",
    "options": {
      "A": "CMV pneumonitis \u2014 ganciclovir",
      "B": "Pneumocystis jirovecii pneumonia \u2014 TMP-SMX + prednisone (if PaO2 <70)",
      "C": "Cryptococcal pneumonia \u2014 fluconazole",
      "D": "Toxoplasma pneumonitis \u2014 pyrimethamine-sulfadiazine"
    },
    "answer": "B",
    "explanation": "PCP (Pneumocystis jirovecii pneumonia) classic presentation in HIV: bilateral ground-glass opacities, elevated LDH, CD4 <200. Treatment: TMP-SMX (21 days). Add systemic corticosteroids when PaO2 <70 mmHg or A-a gradient >35 to reduce mortality from inflammatory response."
  },
  {
    "id": 89,
    "chapter": 10,
    "domain": "Pulmonology",
    "question": "A 32-year-old woman presents with flu-like illness progressing to pneumonia 3 days after visiting a cave in Ohio. Chest CT shows mediastinal lymphadenopathy and a pulmonary nodule. Urine antigen test is positive. The most likely diagnosis is:",
    "options": {
      "A": "Tuberculosis",
      "B": "Blastomycosis",
      "C": "Histoplasmosis",
      "D": "Coccidioidomycosis"
    },
    "answer": "C",
    "explanation": "Histoplasma capsulatum is endemic in the Ohio/Mississippi River Valley. Found in bird and bat droppings in caves, old buildings. Urine Histoplasma antigen is the most sensitive rapid test. Mild disease resolves spontaneously; disseminated/severe disease treated with itraconazole or amphotericin B."
  },
  {
    "id": 90,
    "chapter": 10,
    "domain": "Pulmonology",
    "question": "A 70-year-old man with COPD has a pleural effusion. Thoracentesis fluid analysis: protein 4.5 g/dL (serum 7.2), LDH 350 U/L (serum 200), pH 7.38. Using Light's criteria, this effusion is:",
    "options": {
      "A": "Transudate \u2014 treat underlying condition",
      "B": "Exudate \u2014 requires further workup",
      "C": "Cannot be determined from given data",
      "D": "Transudate based on pH alone"
    },
    "answer": "B",
    "explanation": "Light's criteria for exudate: ANY of: (1) pleural/serum protein >0.5 [4.5/7.2=0.625 \u2713], (2) pleural LDH >2/3 upper normal limit, (3) pleural/serum LDH >0.6 [350/200=1.75 \u2713]. This meets criteria \u2192 exudate. Exudates require further workup (cytology, cultures, ADA) for cancer, infection, or inflammation."
  },
  {
    "id": 91,
    "chapter": 10,
    "domain": "Pulmonology",
    "question": "A patient presents with fever, night sweats, hemoptysis, and upper lobe cavitary lesion on chest CT. He emigrated from Southeast Asia 2 years ago. AFB smear is positive. What is the standard initial treatment regimen?",
    "options": {
      "A": "Isoniazid + rifampin for 6 months",
      "B": "Isoniazid + rifampin + pyrazinamide + ethambutol for 2 months, then isoniazid + rifampin for 4 months",
      "C": "Fluoroquinolone monotherapy for 12 months",
      "D": "Isoniazid + rifampin + ethambutol for 9 months"
    },
    "answer": "B",
    "explanation": "Standard TB treatment: RIPE (Rifampin + Isoniazid + Pyrazinamide + Ethambutol) for 2 months (intensive phase), then RI for 4 months (continuation phase) = 6 months total. Pyridoxine (B6) is added with isoniazid to prevent peripheral neuropathy."
  },
  {
    "id": 92,
    "chapter": 10,
    "domain": "Pulmonology",
    "question": "Legionella pneumophila pneumonia is characteristically associated with which of the following findings?",
    "options": {
      "A": "Gram-positive cocci in clusters and rapid response to beta-lactams",
      "B": "Hyponatremia, diarrhea, and relative bradycardia; does not Gram stain well",
      "C": "Positive blood cultures in >50% of cases",
      "D": "Lobar consolidation with pleural effusion in all cases"
    },
    "answer": "B",
    "explanation": "Legionella atypical features: relative bradycardia (pulse-temperature dissociation), GI symptoms (diarrhea, nausea), hyponatremia, elevated LFTs, and confusion (Pontiac fever = mild form). Does not Gram stain (intracellular). Urine Legionella antigen is the fastest diagnostic test. Treat with fluoroquinolone or azithromycin."
  },
  {
    "id": 93,
    "chapter": 10,
    "domain": "Pulmonology",
    "question": "The CURB-65 score includes which five variables?",
    "options": {
      "A": "CRP, Urea, Respiratory rate, Blood pressure, age \u226565",
      "B": "Confusion, Urea >7 mmol/L, Respiratory rate \u226530, Blood pressure (systolic <90 or diastolic \u226460), age \u226565",
      "C": "Cough, Urea, Radiographic infiltrate, Blood pressure, age \u226565",
      "D": "Confusion, Urine output, Respiratory rate, Blood pressure, LDH"
    },
    "answer": "B",
    "explanation": "CURB-65: Confusion, Urea >7 mmol/L (BUN >20 mg/dL), Respiratory rate \u226530, Blood pressure (systolic <90 or diastolic \u226460), age \u226565. Score 0\u20131: outpatient; 2: consider admission; \u22653: severe CAP, ICU consider. Score 2 points each for >2 criteria met."
  },
  {
    "id": 94,
    "chapter": 10,
    "domain": "Pulmonology",
    "question": "A 52-year-old man with alcoholism develops aspiration pneumonia. Which lobe is most commonly affected in aspiration when the patient is supine?",
    "options": {
      "A": "Right upper lobe",
      "B": "Right middle lobe",
      "C": "Right lower lobe (superior segment)",
      "D": "Left lower lobe"
    },
    "answer": "C",
    "explanation": "In the supine patient, aspirated material preferentially flows to the superior segment of the right lower lobe (due to gravity and the more vertical course of the right main bronchus). In the upright or semi-recumbent patient, the right lower lobe basal segments are most affected."
  },
  {
    "id": 95,
    "chapter": 11,
    "domain": "Pulmonology",
    "question": "A 58-year-old woman presents with progressive exertional dyspnea over 2 years. She has no smoking history. HRCT shows bilateral basal and subpleural honeycombing with traction bronchiectasis. PFTs show FVC 58% predicted, TLC 62% predicted, DLCO 45% predicted. The most likely diagnosis is:",
    "options": {
      "A": "Nonspecific interstitial pneumonia (NSIP)",
      "B": "Hypersensitivity pneumonitis",
      "C": "Usual interstitial pneumonia / IPF",
      "D": "Cryptogenic organizing pneumonia"
    },
    "answer": "C",
    "explanation": "UIP pattern on HRCT (bilateral basal, subpleural honeycombing \u00b1 traction bronchiectasis) + restrictive PFTs + reduced DLCO in a >60-year-old woman without identifiable cause = IPF diagnosis. UIP/IPF has the worst prognosis among IIPs (median survival 3\u20135 years)."
  },
  {
    "id": 96,
    "chapter": 11,
    "domain": "Pulmonology",
    "question": "Which of the following antifibrotic agents is FDA-approved for IPF and slows the rate of FVC decline?",
    "options": {
      "A": "Azathioprine and N-acetylcysteine (PANTHER trial)",
      "B": "Pirfenidone or nintedanib",
      "C": "Prednisone monotherapy",
      "D": "Cyclophosphamide"
    },
    "answer": "B",
    "explanation": "Pirfenidone (anti-fibrotic, anti-inflammatory) and nintedanib (tyrosine kinase inhibitor) both reduce FVC decline by ~50% in IPF (ASCEND, INPULSIS trials). They do not reverse existing fibrosis but slow progression. PANTHER trial showed azathioprine + prednisone + NAC increased mortality vs. placebo."
  },
  {
    "id": 97,
    "chapter": 11,
    "domain": "Pulmonology",
    "question": "A 45-year-old woman presents with dyspnea and bilateral hilar lymphadenopathy on CXR. She is asymptomatic systemically. Serum ACE is elevated. Transbronchial biopsy shows non-caseating granulomas. The most appropriate initial management is:",
    "options": {
      "A": "Start prednisone immediately",
      "B": "Observation \u2014 Lofgren syndrome often resolves spontaneously",
      "C": "Methotrexate for long-term immunosuppression",
      "D": "Anti-TB therapy"
    },
    "answer": "B",
    "explanation": "Stage I sarcoidosis (bilateral hilar lymphadenopathy without parenchymal infiltrates) commonly presents as L\u00f6fgren syndrome (BHL + erythema nodosum + acute arthritis) and resolves spontaneously in >80%. Corticosteroids are reserved for symptomatic disease, organ-threatening involvement, or worsening."
  },
  {
    "id": 98,
    "chapter": 11,
    "domain": "Pulmonology",
    "question": "A 35-year-old woman with systemic sclerosis develops dyspnea and is found to have a mean pulmonary artery pressure of 38 mmHg on right heart catheterization with pulmonary capillary wedge pressure of 10 mmHg. Which WHO group of pulmonary hypertension does this represent?",
    "options": {
      "A": "Group 1 \u2014 Pulmonary arterial hypertension",
      "B": "Group 2 \u2014 PH due to left heart disease",
      "C": "Group 3 \u2014 PH due to lung disease",
      "D": "Group 4 \u2014 Chronic thromboembolic PH"
    },
    "answer": "A",
    "explanation": "WHO Group 1 PAH: mPAP \u226520 mmHg, PCWP \u226415 mmHg (pre-capillary), PVR \u22653 WU. Associated causes include: idiopathic, connective tissue disease (especially systemic sclerosis), HIV, portal hypertension, congenital heart disease. Treatment targets the prostacyclin, endothelin, and NO pathways."
  },
  {
    "id": 99,
    "chapter": 11,
    "domain": "Pulmonology",
    "question": "Which of the following is a first-line treatment for WHO Group 1 PAH (pulmonary arterial hypertension)?",
    "options": {
      "A": "High-dose calcium channel blockers for all patients",
      "B": "Sildenafil (PDE-5 inhibitor) or bosentan (endothelin antagonist)",
      "C": "Systemic anticoagulation with warfarin for all patients",
      "D": "Systemic corticosteroids"
    },
    "answer": "B",
    "explanation": "WHO Group 1 PAH: vasoreactivity testing first. Vasoreactants (~10%) respond to high-dose CCBs. Non-vasoreactants (most patients) require targeted therapy: ERA (bosentan, ambrisentan), PDE-5 inhibitors (sildenafil, tadalafil), or prostacyclin analogs (epoprostenol, treprostinil). Combination therapy is often used."
  },
  {
    "id": 100,
    "chapter": 11,
    "domain": "Pulmonology",
    "question": "A 62-year-old woman with diffuse skin systemic sclerosis has a new ILD on HRCT showing bilateral ground-glass opacities and reticulation in a NSIP pattern. Which treatment has the strongest evidence for SSc-ILD?",
    "options": {
      "A": "Pirfenidone",
      "B": "Mycophenolate mofetil (SLS II trial)",
      "C": "Prednisone high-dose",
      "D": "Rituximab alone"
    },
    "answer": "B",
    "explanation": "For SSc-ILD, mycophenolate mofetil (MMF) is first-line based on the SLS II trial (equivalent to cyclophosphamide, better tolerated). Nintedanib (SENSCIS trial) is also approved for SSc-ILD. Pirfenidone is approved for IPF only. High-dose steroids are avoided in SSc due to scleroderma renal crisis risk."
  },
  {
    "id": 101,
    "chapter": 11,
    "domain": "Pulmonology",
    "question": "Which of the following is the key diagnostic test to confirm pulmonary hypertension and measure hemodynamics?",
    "options": {
      "A": "CT pulmonary angiography",
      "B": "Echocardiography",
      "C": "Right heart catheterization",
      "D": "V/Q scan"
    },
    "answer": "C",
    "explanation": "Right heart catheterization (Swan-Ganz) is the gold standard for PH diagnosis. It directly measures mPAP, PCWP (to distinguish pre- vs post-capillary), CO/CI, and PVR. Echocardiography screens for and estimates PA pressures but cannot definitively diagnose PH \u2014 right heart cath is required before starting PAH-specific therapy."
  },
  {
    "id": 102,
    "chapter": 11,
    "domain": "Pulmonology",
    "question": "A patient with sarcoidosis has elevated calcium levels. What is the mechanism?",
    "options": {
      "A": "PTH secretion from parathyroid involvement",
      "B": "1,25-dihydroxyvitamin D overproduction by granuloma macrophages",
      "C": "Calcium release from granulomas",
      "D": "Bone metastases from sarcoid granulomas"
    },
    "answer": "B",
    "explanation": "Sarcoidosis granuloma macrophages contain 1-alpha-hydroxylase, which converts 25-OH vitamin D to the active 1,25(OH)2 vitamin D (calcitriol) autonomously. This bypasses normal PTH regulation, causing hypercalcemia and hypercalciuria. PTH is suppressed. Treatment: hydration, corticosteroids, avoid sunlight/vitamin D supplements."
  },
  {
    "id": 103,
    "chapter": 12,
    "domain": "Gastroenterology",
    "question": "A 45-year-old man presents with heartburn and regurgitation, worse after meals and when lying down. An upper endoscopy shows salmon-colored mucosa extending 3 cm above the GEJ with biopsy confirming intestinal metaplasia. The diagnosis is:",
    "options": {
      "A": "Erosive esophagitis",
      "B": "Barrett's esophagus",
      "C": "Eosinophilic esophagitis",
      "D": "Hiatal hernia"
    },
    "answer": "B",
    "explanation": "Barrett's esophagus: replacement of normal squamous esophageal mucosa with intestinal metaplasia (columnar epithelium with goblet cells) at the GEJ \u2014 the premalignant lesion for esophageal adenocarcinoma. Confirmed by biopsy. Surveillance endoscopy interval depends on dysplasia grade."
  },
  {
    "id": 104,
    "chapter": 12,
    "domain": "Gastroenterology",
    "question": "A 35-year-old woman on long-term ibuprofen for rheumatoid arthritis presents with epigastric pain and hematemesis. Upper endoscopy shows a 1.5 cm ulcer on the lesser curvature of the stomach. H. pylori testing is positive. The most important initial intervention is:",
    "options": {
      "A": "Discontinue NSAIDs and start PPI plus H. pylori eradication therapy",
      "B": "Surgical intervention for bleeding peptic ulcer",
      "C": "Start misoprostol and continue ibuprofen",
      "D": "Perform repeat endoscopy in 48 hours"
    },
    "answer": "A",
    "explanation": "NSAID + H. pylori are the two most common causes of peptic ulcer disease. Management: discontinue the offending NSAID, initiate PPI (omeprazole 20-40mg BID), and eradicate H. pylori with triple therapy (PPI + clarithromycin + amoxicillin \u00d7 14 days or bismuth quadruple therapy)."
  },
  {
    "id": 105,
    "chapter": 12,
    "domain": "Gastroenterology",
    "question": "A 55-year-old man on omeprazole for GERD is found to be H. pylori positive on urea breath test performed 4 weeks after completing triple therapy. What is the appropriate next step?",
    "options": {
      "A": "Repeat triple therapy with same regimen",
      "B": "Bismuth quadruple therapy or levofloxacin-based therapy",
      "C": "Surgical H. pylori eradication",
      "D": "Test-and-treat with rifabutin triple therapy as first line"
    },
    "answer": "B",
    "explanation": "H. pylori treatment failure (positive test \u22654 weeks after completion) should be retreated with a different regimen \u2014 bismuth quadruple therapy (PPI + bismuth + tetracycline + metronidazole \u00d714 days) or levofloxacin-based triple therapy. Do not repeat the same regimen (clarithromycin resistance)."
  },
  {
    "id": 106,
    "chapter": 12,
    "domain": "Gastroenterology",
    "question": "Which medication class is associated with the highest risk of gastrointestinal bleeding when used chronically?",
    "options": {
      "A": "ACE inhibitors",
      "B": "Non-selective NSAIDs",
      "C": "Selective COX-2 inhibitors",
      "D": "Corticosteroids alone"
    },
    "answer": "B",
    "explanation": "Non-selective NSAIDs (ibuprofen, naproxen, indomethacin) inhibit both COX-1 (protective prostaglandins for gastric mucosa) and COX-2. This depletes mucosal protection, increases acid secretion, and impairs platelet aggregation. Risk is 3\u20135\u00d7 higher than non-users. COX-2 inhibitors spare gastric mucosa but increase cardiovascular risk."
  },
  {
    "id": 107,
    "chapter": 12,
    "domain": "Gastroenterology",
    "question": "A patient with longstanding GERD develops progressive dysphagia to solids. Upper endoscopy shows a fungating mass at the GEJ. Biopsy confirms adenocarcinoma. Which risk factor is most directly linked to this cancer?",
    "options": {
      "A": "H. pylori infection",
      "B": "Barrett's esophagus",
      "C": "Alcohol use",
      "D": "Smoking alone"
    },
    "answer": "B",
    "explanation": "Esophageal adenocarcinoma (EAC) arises from Barrett's esophagus (GERD \u2192 intestinal metaplasia \u2192 dysplasia \u2192 adenocarcinoma). Barrett's with high-grade dysplasia has a 30% annual risk of progression to EAC. Squamous cell carcinoma (upper/mid esophagus) is linked to alcohol and smoking."
  },
  {
    "id": 108,
    "chapter": 12,
    "domain": "Gastroenterology",
    "question": "A 42-year-old man presents with solid food dysphagia and a 'steak getting stuck' sensation. Endoscopy shows concentric rings in the esophagus and linear furrows. Biopsy shows \u226515 eosinophils per high-power field. The diagnosis is:",
    "options": {
      "A": "Barrett's esophagus",
      "B": "Achalasia",
      "C": "Eosinophilic esophagitis",
      "D": "Esophageal candidiasis"
    },
    "answer": "C",
    "explanation": "Eosinophilic esophagitis (EoE): young men with atopy, dysphagia/food impaction, concentric rings (trachealization) and linear furrows on endoscopy, \u226515 eos/HPF on biopsy. Triggers: food allergens (dairy, wheat). Treatment: PPI trial first, then swallowed fluticasone or dietary elimination."
  },
  {
    "id": 109,
    "chapter": 12,
    "domain": "Gastroenterology",
    "question": "A 28-year-old woman has recurrent epigastric pain, diarrhea, and multiple peptic ulcers in unusual locations (distal duodenum, jejunum) despite PPI therapy. Serum gastrin is 1,200 pg/mL (normal <100). The diagnosis is:",
    "options": {
      "A": "H. pylori-associated ulcers",
      "B": "Zollinger-Ellison syndrome (gastrinoma)",
      "C": "Crohn's disease",
      "D": "Stress ulcer disease"
    },
    "answer": "B",
    "explanation": "Zollinger-Ellison syndrome: gastrin-secreting tumor (gastrinoma) in the pancreas or duodenum. Key features: refractory/recurrent PUD, distal duodenal/jejunal ulcers, diarrhea (from acid), markedly elevated fasting gastrin (>1000 pg/mL diagnostic). Part of MEN1. Treated with high-dose PPI and surgical resection."
  },
  {
    "id": 110,
    "chapter": 12,
    "domain": "Gastroenterology",
    "question": "The secretin stimulation test is used to confirm which diagnosis?",
    "options": {
      "A": "H. pylori infection",
      "B": "Zollinger-Ellison syndrome",
      "C": "Achalasia",
      "D": "Eosinophilic esophagitis"
    },
    "answer": "B",
    "explanation": "Secretin stimulation test: IV secretin causes a paradoxical rise in gastrin (>120 pg/mL above baseline) in gastrinoma \u2014 in normal physiology, secretin suppresses gastrin. This distinguishes gastrinoma from other causes of hypergastrinemia (e.g., PPI use, H. pylori, atrophic gastritis, which do not show paradoxical rise)."
  },
  {
    "id": 111,
    "chapter": 13,
    "domain": "Gastroenterology",
    "question": "A 27-year-old woman presents with bloody diarrhea, abdominal cramping, and 15 lb weight loss over 3 months. Colonoscopy shows continuous mucosal ulceration from the rectum extending to the splenic flexure with pseudopolyps. Biopsy shows crypt abscesses. The diagnosis is:",
    "options": {
      "A": "Crohn's colitis",
      "B": "Ulcerative colitis",
      "C": "Infectious colitis (C. difficile)",
      "D": "Ischemic colitis"
    },
    "answer": "B",
    "explanation": "Ulcerative colitis: continuous mucosal inflammation starting from rectum (always involved) extending proximally. Biopsy: crypt abscesses and mucin depletion, limited to mucosa/submucosa. Crohn's is transmural, skip lesions, can affect any GI segment, forms granulomas."
  },
  {
    "id": 112,
    "chapter": 13,
    "domain": "Gastroenterology",
    "question": "A 32-year-old man with Crohn's disease develops perianal fistulas and recurrent abscesses despite conventional therapy. Which biologic agent is most appropriate?",
    "options": {
      "A": "Vedolizumab",
      "B": "Infliximab (anti-TNF)",
      "C": "Ustekinumab",
      "D": "Ozanimod"
    },
    "answer": "B",
    "explanation": "Anti-TNF agents (infliximab, adalimumab) are first-line biologics for Crohn's disease, particularly for perianal fistulizing disease. Infliximab (with azathioprine) has the best evidence for fistula closure. Vedolizumab and ustekinumab are alternatives for patients who fail or are intolerant to anti-TNF."
  },
  {
    "id": 113,
    "chapter": 13,
    "domain": "Gastroenterology",
    "question": "A patient with ulcerative colitis is started on mesalamine. Three months later he continues to have bloody diarrhea 6\u00d7/day and abdominal pain. The most appropriate next step is:",
    "options": {
      "A": "Increase mesalamine dose",
      "B": "Add oral prednisone",
      "C": "Proceed directly to colectomy",
      "D": "Start budesonide"
    },
    "answer": "B",
    "explanation": "For mild-moderate UC (mesalamine failures), systemic corticosteroids (prednisone 40-60 mg/day) are the standard bridge to induction of remission. If steroids fail or the patient is steroid-dependent, escalation to biologics (anti-TNF, vedolizumab, ustekinumab) or JAK inhibitors (tofacitinib) is indicated."
  },
  {
    "id": 114,
    "chapter": 13,
    "domain": "Gastroenterology",
    "question": "A 45-year-old woman with a 20-year history of pancolonic ulcerative colitis presents for surveillance colonoscopy. She has no dysplasia on biopsy. When should her next surveillance colonoscopy be performed?",
    "options": {
      "A": "1 year",
      "B": "1\u20132 years",
      "C": "3 years",
      "D": "5 years"
    },
    "answer": "B",
    "explanation": "Colorectal cancer surveillance in UC: after 8\u201310 years of disease with pancolitis (or 15 years with left-sided colitis), colonoscopy every 1\u20132 years. Higher-risk features (PSC, prior dysplasia, family history CRC) warrant annual surveillance."
  },
  {
    "id": 115,
    "chapter": 13,
    "domain": "Gastroenterology",
    "question": "Which extra-intestinal manifestation of IBD parallels disease activity and improves with treatment of the bowel disease?",
    "options": {
      "A": "Primary sclerosing cholangitis",
      "B": "Ankylosing spondylitis",
      "C": "Erythema nodosum and peripheral arthritis",
      "D": "Uveitis"
    },
    "answer": "C",
    "explanation": "IBD extra-intestinal manifestations: some parallel disease activity (erythema nodosum, peripheral arthritis, episcleritis) and improve with IBD treatment. Others are independent (PSC, ankylosing spondylitis, uveitis) and do not correlate with bowel activity. PSC is associated with UC in 70\u201380% of cases."
  },
  {
    "id": 116,
    "chapter": 13,
    "domain": "Gastroenterology",
    "question": "A 38-year-old man with Crohn's disease involving the terminal ileum undergoes small bowel resection of 80 cm. Which vitamin deficiency is most likely to develop?",
    "options": {
      "A": "Folate (duodenum/proximal jejunum)",
      "B": "Vitamin B12 (terminal ileum)",
      "C": "Vitamin A",
      "D": "Vitamin C"
    },
    "answer": "B",
    "explanation": "Vitamin B12 (cobalamin) is absorbed exclusively in the terminal ileum (bound to intrinsic factor). Resection of \u226560 cm of terminal ileum leads to B12 malabsorption requiring lifelong B12 supplementation (IM or high-dose oral). Bile acid malabsorption also occurs, causing secretory diarrhea."
  },
  {
    "id": 117,
    "chapter": 13,
    "domain": "Gastroenterology",
    "question": "Toxic megacolon is a life-threatening complication more commonly associated with which condition?",
    "options": {
      "A": "Crohn's disease",
      "B": "Ulcerative colitis",
      "C": "Irritable bowel syndrome",
      "D": "Diverticular disease"
    },
    "answer": "B",
    "explanation": "Toxic megacolon: acute colonic dilation (>6 cm transverse colon) with systemic toxicity. More common in UC, but also in severe C. difficile colitis, Crohn's colitis, and infectious colitis. Treatment: bowel rest, IV steroids, broad-spectrum antibiotics, and surgery if no improvement in 24\u201372 hours."
  },
  {
    "id": 118,
    "chapter": 13,
    "domain": "Gastroenterology",
    "question": "Which IBD medication carries the risk of progressive multifocal leukoencephalopathy (PML) due to JC virus reactivation?",
    "options": {
      "A": "Infliximab",
      "B": "Vedolizumab",
      "C": "Natalizumab",
      "D": "Ustekinumab"
    },
    "answer": "C",
    "explanation": "Natalizumab (anti-\u03b14 integrin) is approved for Crohn's but carries significant PML risk from JC virus reactivation. JC antibody testing (Stratify JCV index) risk-stratifies patients. Vedolizumab (gut-selective \u03b14\u03b27 integrin inhibitor) has very low PML risk as it acts locally in the GI tract."
  },
  {
    "id": 119,
    "chapter": 14,
    "domain": "Gastroenterology",
    "question": "A 55-year-old man with chronic HCV presents with ascites, jaundice, and spider angiomata. His Child-Pugh score is 8 (class B). INR is 2.1, bilirubin 3.5 mg/dL, albumin 2.8 g/dL. What is the most common cause of spontaneous bacterial peritonitis (SBP) in cirrhosis?",
    "options": {
      "A": "Bacteroides fragilis",
      "B": "Escherichia coli",
      "C": "Staphylococcus aureus",
      "D": "Klebsiella pneumoniae"
    },
    "answer": "B",
    "explanation": "SBP is caused predominantly by enteric gram-negative bacteria: E. coli (most common), Klebsiella pneumoniae, and Streptococcus pneumoniae. Anaerobes are rare (protective mechanisms of ascites). Diagnosis: ascitic PMN \u2265250/mm\u00b3. Treatment: cefotaxime 2g IV q8h. Prophylaxis: norfloxacin or TMP-SMX."
  },
  {
    "id": 120,
    "chapter": 14,
    "domain": "Gastroenterology",
    "question": "A cirrhotic patient develops fever, abdominal pain, and confusion. Diagnostic paracentesis shows PMN 320/mm\u00b3, protein 0.8 g/dL, no organisms on Gram stain. The diagnosis and treatment are:",
    "options": {
      "A": "Secondary peritonitis \u2014 emergency surgery",
      "B": "Spontaneous bacterial peritonitis \u2014 IV cefotaxime",
      "C": "Hepatocellular carcinoma rupture \u2014 urgent CT",
      "D": "Tuberculous peritonitis \u2014 anti-TB therapy"
    },
    "answer": "B",
    "explanation": "SBP diagnosis: ascitic PMN \u2265250/mm\u00b3 without an identifiable surgically treatable source. Low protein (<1 g/dL) reflects low ascitic opsonic activity. Gram stain is often negative in SBP. Treatment: IV cefotaxime \u00d7 5 days. Add albumin 1.5 g/kg on day 1 and 1 g/kg on day 3 to prevent hepatorenal syndrome."
  },
  {
    "id": 121,
    "chapter": 14,
    "domain": "Gastroenterology",
    "question": "A patient with alcoholic cirrhosis presents with upper GI bleed. Endoscopy shows grade III esophageal varices with active bleeding. After endoscopic band ligation and octreotide infusion, which medication is used for secondary prophylaxis to prevent re-bleeding?",
    "options": {
      "A": "Propranolol or nadolol (non-selective beta-blocker)",
      "B": "Isosorbide mononitrate alone",
      "C": "Pantoprazole",
      "D": "LMWH anticoagulation"
    },
    "answer": "A",
    "explanation": "Secondary prophylaxis after variceal bleed: combination endoscopic band ligation + non-selective beta-blocker (propranolol, nadolol, or carvedilol). NSBBs reduce portal pressure by decreasing cardiac output (\u03b21) and splanchnic vasoconstriction (\u03b22). TIPS is reserved for failures."
  },
  {
    "id": 122,
    "chapter": 14,
    "domain": "Gastroenterology",
    "question": "A 48-year-old woman presents with jaundice, right upper quadrant pain, and fever (Charcot's triad). She has a history of gallstones. Labs show bilirubin 6.2, ALP 480, WBC 18,000, and ALT 230. The diagnosis is:",
    "options": {
      "A": "Acute cholecystitis",
      "B": "Ascending cholangitis",
      "C": "Choledocholithiasis without infection",
      "D": "Primary biliary cholangitis"
    },
    "answer": "B",
    "explanation": "Charcot's triad (RUQ pain + jaundice + fever) = ascending cholangitis until proven otherwise. Reynolds' pentad adds hypotension and altered mental status (severe suppurative cholangitis). Labs show cholestatic pattern (ALP, bilirubin) \u00b1 transaminase elevation. Treatment: IV antibiotics + urgent biliary decompression (ERCP)."
  },
  {
    "id": 123,
    "chapter": 14,
    "domain": "Gastroenterology",
    "question": "A 62-year-old woman with primary biliary cholangitis (PBC) has pruritus refractory to cholestyramine. Her ALP is 5\u00d7 ULN and she is UDCA-unresponsive. Which medication is approved as second-line treatment?",
    "options": {
      "A": "Colchicine",
      "B": "Obeticholic acid",
      "C": "Methotrexate",
      "D": "Prednisone"
    },
    "answer": "B",
    "explanation": "Ursodeoxycholic acid (UDCA) is first-line for PBC \u2014 slows progression in ~40% of patients. For UDCA non-responders: obeticholic acid (farnesoid X receptor agonist, POISE trial) is FDA-approved second-line. Bezafibrate is used in some countries. Steroids are ineffective and harmful in PBC."
  },
  {
    "id": 124,
    "chapter": 14,
    "domain": "Gastroenterology",
    "question": "A 40-year-old man with UC and elevated ALP is found to have primary sclerosing cholangitis (PSC) on MRCP showing multifocal strictures. Which malignancy is he at increased risk for?",
    "options": {
      "A": "Hepatocellular carcinoma",
      "B": "Cholangiocarcinoma",
      "C": "Pancreatic adenocarcinoma",
      "D": "Gallbladder carcinoma and cholangiocarcinoma"
    },
    "answer": "D",
    "explanation": "PSC significantly increases risk of cholangiocarcinoma (10\u201315% lifetime), gallbladder carcinoma, and colorectal cancer (in UC-PSC). MRCP surveillance and colonoscopy annual are recommended. CA 19-9 and brush cytology at ERCP for cholangiocarcinoma surveillance."
  },
  {
    "id": 125,
    "chapter": 14,
    "domain": "Gastroenterology",
    "question": "A 58-year-old man with NAFLD cirrhosis and AFP 850 ng/mL is found to have a 4 cm HCC on CT with arterial enhancement and portal venous washout (LI-RADS 5). He has Child-Pugh A liver function. Which treatment is most appropriate?",
    "options": {
      "A": "Sorafenib systemic therapy",
      "B": "Liver transplantation if within Milan criteria",
      "C": "Transarterial chemoembolization (TACE)",
      "D": "Percutaneous ethanol injection"
    },
    "answer": "B",
    "explanation": "Milan criteria for liver transplantation in HCC: single nodule \u22645 cm OR \u22643 nodules each \u22643 cm, no vascular invasion, no extrahepatic spread. A 4 cm single HCC within Milan criteria, with underlying cirrhosis and Child-Pugh A function, is best treated by transplantation (curative). Resection is alternative if adequate liver reserve."
  },
  {
    "id": 126,
    "chapter": 14,
    "domain": "Gastroenterology",
    "question": "A patient with cirrhosis develops confusion, asterixis, and elevated ammonia. Which dietary modification and medication are first-line for hepatic encephalopathy?",
    "options": {
      "A": "High-protein diet + metronidazole",
      "B": "Lactulose and rifaximin + adequate protein intake",
      "C": "Protein restriction <40 g/day + lactulose",
      "D": "Lactulose alone, protein restriction to <20 g/day"
    },
    "answer": "B",
    "explanation": "Hepatic encephalopathy treatment: lactulose (reduces ammonia production, targets NH3 < 2 soft stools/day) + rifaximin (poorly absorbed antibiotic reducing ammonia-producing gut bacteria, REDUCE trial). Protein restriction is NOT recommended \u2014 adequate protein (1.2\u20131.5 g/kg/day) is essential to prevent sarcopenia."
  },
  {
    "id": 127,
    "chapter": 14,
    "domain": "Gastroenterology",
    "question": "Hepatorenal syndrome type 1 (HRS-AKI) is best characterized by:",
    "options": {
      "A": "Acute kidney injury in cirrhosis with increased urine sodium and response to IV fluids",
      "B": "Acute kidney injury in cirrhosis, urine Na <10, FeNa <0.1%, no improvement with albumin expansion",
      "C": "Chronic renal failure due to direct hepatic toxin exposure",
      "D": "ATN caused by aminoglycoside use in cirrhosis"
    },
    "answer": "B",
    "explanation": "HRS-AKI: renal failure in cirrhosis due to extreme splanchnic vasodilation \u2192 renal vasoconstriction. Urine Na <10 mEq/L, FeNa <0.1%, no structural kidney injury, no improvement with IV albumin challenge. Treatment: vasoconstrictors (norepinephrine or terlipressin/vasopressin) + albumin. TIPS or transplant for definitive treatment."
  },
  {
    "id": 128,
    "chapter": 14,
    "domain": "Gastroenterology",
    "question": "Which serological marker best differentiates acute from chronic hepatitis B infection?",
    "options": {
      "A": "HBsAg positive",
      "B": "Anti-HBc IgM (acute) vs. IgG (chronic)",
      "C": "HBeAg positive",
      "D": "HBV DNA levels"
    },
    "answer": "B",
    "explanation": "HBsAg is positive in both acute and chronic HBV. Anti-HBc IgM is the hallmark of ACUTE infection (also positive in acute exacerbation of chronic HBV). Anti-HBc IgG alone suggests past resolved infection or chronic HBV. HBsAb positivity with HBsAg negativity = immune (vaccinated or resolved)."
  },
  {
    "id": 129,
    "chapter": 15,
    "domain": "Gastroenterology",
    "question": "A 45-year-old woman presents with severe epigastric pain radiating to the back, nausea, and vomiting after a large fatty meal. Serum lipase is 1,250 U/L (ULN 60). CT scan shows peripancreatic fat stranding. The most appropriate initial management is:",
    "options": {
      "A": "Urgent ERCP",
      "B": "NPO, aggressive IV fluid resuscitation (LR), and pain management",
      "C": "Immediate surgical debridement",
      "D": "Empiric antibiotics and PPI"
    },
    "answer": "B",
    "explanation": "Mild acute pancreatitis: IV fluids (Lactated Ringer's preferred \u2014 reduces SIRS vs. normal saline, WATERFALL trial), analgesia, and NPO until pain resolves (then early oral refeeding). ERCP is indicated only for gallstone pancreatitis with concurrent cholangitis or persistent biliary obstruction. Antibiotics are not indicated prophylactically."
  },
  {
    "id": 130,
    "chapter": 15,
    "domain": "Gastroenterology",
    "question": "A patient with acute pancreatitis develops fever, leukocytosis, and a CT showing a pancreatic necrosis collection at day 14. CT-guided FNA shows gram-negative rods. The most appropriate treatment is:",
    "options": {
      "A": "Broad-spectrum antibiotics + endoscopic ultrasound-guided drainage",
      "B": "Antibiotics alone for 4\u20136 weeks",
      "C": "Immediate surgical debridement",
      "D": "Drainage only with no antibiotics"
    },
    "answer": "A",
    "explanation": "Infected pancreatic necrosis (IPN): requires antibiotics (imipenem or carbapenems) PLUS drainage. Step-up approach: start with minimally invasive drainage (EUS-guided, radiologic) before surgical necrosectomy. Surgery reserved for failures. Early surgical debridement has higher morbidity than step-up approach (PANTER trial)."
  },
  {
    "id": 131,
    "chapter": 15,
    "domain": "Gastroenterology",
    "question": "A 52-year-old man with a history of alcohol use disorder has recurrent bouts of pancreatitis and now presents with steatorrhea, weight loss, and diabetes. CT shows pancreatic duct dilation and calcifications. The diagnosis and primary enzyme replacement dose are:",
    "options": {
      "A": "Pancreatic adenocarcinoma \u2014 no enzyme replacement",
      "B": "Chronic pancreatitis with exocrine insufficiency \u2014 pancreatic enzyme replacement therapy (PERT)",
      "C": "Pancreatic pseudocyst \u2014 surgical drainage",
      "D": "Autoimmune pancreatitis \u2014 prednisone"
    },
    "answer": "B",
    "explanation": "Chronic pancreatitis: recurrent acute episodes \u2192 permanent structural damage \u2192 exocrine (steatorrhea) and endocrine (diabetes) insufficiency. Pancreatic calcifications and ductal dilation on CT confirm the diagnosis. PERT (lipase \u226540,000\u201350,000 IU/meal) treats malabsorption. Fat-soluble vitamins also supplemented."
  },
  {
    "id": 132,
    "chapter": 15,
    "domain": "Gastroenterology",
    "question": "The Ranson criteria are used in acute pancreatitis to predict which outcome?",
    "options": {
      "A": "Need for ERCP",
      "B": "Likelihood of infected necrosis",
      "C": "Severity and mortality prediction at admission and 48 hours",
      "D": "Requirement for surgical drainage"
    },
    "answer": "C",
    "explanation": "Ranson criteria predict severity of acute pancreatitis: 5 criteria at admission (WBC >16k, glucose >200, LDH >350, AST >250, age >55) + 6 criteria at 48 hours (hematocrit drop >10, BUN rise >5, calcium <8, PaO2 <60, base deficit >4, fluid sequestration >6L). Score \u22653 = severe pancreatitis with high mortality."
  },
  {
    "id": 133,
    "chapter": 15,
    "domain": "Gastroenterology",
    "question": "A 35-year-old woman with known gallstones presents with acute-onset epigastric pain, lipase 2,100, and bilirubin 3.2. After resolution of acute pancreatitis, which definitive treatment prevents recurrence?",
    "options": {
      "A": "Low-fat diet only",
      "B": "Cholecystectomy during the same hospitalization (index hospitalization)",
      "C": "ERCP with sphincterotomy alone",
      "D": "Elective cholecystectomy in 6 weeks"
    },
    "answer": "B",
    "explanation": "For mild gallstone pancreatitis, cholecystectomy should be performed during the index hospitalization (same admission) to prevent recurrent pancreatitis. Studies show up to 30% readmission for recurrent pancreatitis if cholecystectomy is delayed. Delaying to 6 weeks is appropriate only for severe pancreatitis with complications."
  },
  {
    "id": 134,
    "chapter": 15,
    "domain": "Gastroenterology",
    "question": "Autoimmune pancreatitis type 1 (AIP) is characterized by elevated levels of which immunoglobulin?",
    "options": {
      "A": "IgA",
      "B": "IgM",
      "C": "IgG4",
      "D": "IgE"
    },
    "answer": "C",
    "explanation": "Type 1 AIP (IgG4-related disease): elevated serum IgG4 (>140 mg/dL), lymphoplasmacytic infiltrate with IgG4+ plasma cells, storiform fibrosis. Presents as painless obstructive jaundice mimicking pancreatic cancer. Responds dramatically to prednisone (diagnostic and therapeutic). Type 2 AIP: IgG4-negative, associated with IBD."
  },
  {
    "id": 135,
    "chapter": 15,
    "domain": "Gastroenterology",
    "question": "Which of the following is the most common complication of acute pancreatitis?",
    "options": {
      "A": "Pseudocyst",
      "B": "Pancreatic necrosis",
      "C": "Duodenal obstruction",
      "D": "Splenic vein thrombosis"
    },
    "answer": "A",
    "explanation": "Pancreatic pseudocyst (fluid collection surrounded by a non-epithelialized wall) is the most common complication of acute pancreatitis, occurring in ~10\u201320%. They often resolve spontaneously. Intervention (EUS-guided cystgastrostomy) is indicated for symptomatic, enlarging, or infected pseudocysts."
  },
  {
    "id": 136,
    "chapter": 15,
    "domain": "Gastroenterology",
    "question": "A 55-year-old man with chronic alcohol use disorder presents with painless jaundice, pruritus, and a palpable non-tender gallbladder. The most important next step is:",
    "options": {
      "A": "ERCP to place a biliary stent",
      "B": "Ultrasound and CA 19-9 to evaluate for pancreatic head mass",
      "C": "MRCP to evaluate bile duct stones",
      "D": "CT abdomen with contrast to evaluate for hepatocellular carcinoma"
    },
    "answer": "B",
    "explanation": "Courvoisier's sign: painless jaundice + palpable, non-tender gallbladder suggests malignant biliary obstruction (pancreatic head cancer > cholangiocarcinoma). With gallstones, the gallbladder is usually fibrotic and non-distensible. CT pancreas protocol or endoscopic ultrasound are the preferred initial investigations."
  },
  {
    "id": 137,
    "chapter": 16,
    "domain": "Nephrology",
    "question": "A 68-year-old man has a serum sodium of 122 mEq/L, serum osmolality 258 mOsm/kg, urine osmolality 480 mOsm/kg, and urine sodium 58 mEq/L. He has no edema, no orthostasis, and is euvolemic. The most likely diagnosis is:",
    "options": {
      "A": "Hypothyroidism",
      "B": "Primary polydipsia",
      "C": "SIADH",
      "D": "Adrenal insufficiency"
    },
    "answer": "C",
    "explanation": "SIADH diagnosis: hypotonic hyponatremia (serum osm <275) + urine inappropriately concentrated (>100, typically >300 mOsm/kg) + urine Na >40 + euvolemia + normal thyroid/adrenal function. Treatment: fluid restriction; if severe/symptomatic: hypertonic saline, tolvaptan, or demeclocycline."
  },
  {
    "id": 138,
    "chapter": 16,
    "domain": "Nephrology",
    "question": "A patient develops hypernatremia (Na 158 mEq/L) after a head injury. Urine output is 8 L/day with urine osmolality 85 mOsm/kg that does not concentrate with desmopressin. The diagnosis is:",
    "options": {
      "A": "Nephrogenic diabetes insipidus",
      "B": "Central diabetes insipidus",
      "C": "Primary polydipsia",
      "D": "SIADH"
    },
    "answer": "A",
    "explanation": "Diabetes insipidus: central (ADH deficiency, responds to DDAVP) vs. nephrogenic (ADH resistance, does NOT respond to DDAVP). Urine osmolality fails to increase with desmopressin \u2192 nephrogenic DI. Head injury causes central DI (responds to DDAVP). This patient's lack of response identifies nephrogenic DI."
  },
  {
    "id": 139,
    "chapter": 16,
    "domain": "Nephrology",
    "question": "A patient with hyperkalemia (K+ 6.8 mEq/L) has peaked T waves on ECG. The FIRST intervention should be:",
    "options": {
      "A": "IV sodium bicarbonate",
      "B": "Calcium gluconate IV",
      "C": "Regular insulin + D50W",
      "D": "Sodium polystyrene sulfonate (Kayexalate)"
    },
    "answer": "B",
    "explanation": "With ECG changes (peaked T waves, wide QRS), IV calcium gluconate is the FIRST step \u2014 it stabilizes the cardiac membrane within minutes. It does NOT lower potassium but prevents cardiac arrhythmia. Next: insulin + glucose (lowers K+ by shifting into cells), followed by sodium bicarbonate, dialysis, or Patiromer/SZC for definitive removal."
  },
  {
    "id": 140,
    "chapter": 16,
    "domain": "Nephrology",
    "question": "An arterial blood gas shows pH 7.28, PaCO2 28 mmHg, HCO3 13 mEq/L. Serum electrolytes: Na 140, Cl 112. What is the acid-base disorder?",
    "options": {
      "A": "Pure metabolic acidosis with appropriate respiratory compensation",
      "B": "Metabolic acidosis with inadequate respiratory compensation",
      "C": "Mixed metabolic acidosis and respiratory alkalosis",
      "D": "Normal anion gap metabolic acidosis without compensation"
    },
    "answer": "A",
    "explanation": "Anion gap = Na - (Cl + HCO3) = 140 - (112 + 13) = 15 (normal <12, so elevated AG). Expected PCO2 compensation = 1.5 \u00d7 HCO3 + 8 \u00b1 2 = 1.5(13)+8 = 27.5, actual PCO2 = 28 \u2713 \u2014 appropriate compensation. Diagnosis: high anion gap metabolic acidosis (HAGMA) with appropriate respiratory compensation."
  },
  {
    "id": 141,
    "chapter": 16,
    "domain": "Nephrology",
    "question": "A 55-year-old diabetic woman presents with severe abdominal pain, vomiting, and dehydration. ABG: pH 7.15, HCO3 8, PCO2 22, glucose 480 mg/dL. Ketones positive. The priority intervention is:",
    "options": {
      "A": "Sodium bicarbonate infusion",
      "B": "Aggressive IV fluid resuscitation and insulin infusion",
      "C": "Immediate hemodialysis",
      "D": "Potassium replacement before insulin"
    },
    "answer": "B",
    "explanation": "DKA management: first priority is IV fluid resuscitation (NS 1L/hour for 2 hours) to restore circulating volume, then insulin infusion (0.1 U/kg/hr regular insulin IV). Critical: check potassium BEFORE starting insulin \u2014 if K+ <3.5, replace first to prevent dangerous hypokalemia when insulin drives K+ intracellularly."
  },
  {
    "id": 142,
    "chapter": 16,
    "domain": "Nephrology",
    "question": "A patient has metabolic alkalosis with urine chloride of 8 mEq/L. The most common cause in this patient is:",
    "options": {
      "A": "Hyperaldosteronism",
      "B": "Cushing syndrome",
      "C": "Vomiting or nasogastric suction",
      "D": "Bartter syndrome"
    },
    "answer": "C",
    "explanation": "Metabolic alkalosis classification: urine Cl <20 mEq/L = chloride-responsive (HCl loss \u2014 vomiting, NG suction, diuretic remote use). Urine Cl >20 = chloride-resistant (hyperaldosteronism, Cushing, Bartter/Gitelman syndromes, active diuretic use). Chloride-responsive MA treated with NS + KCl replacement."
  },
  {
    "id": 143,
    "chapter": 16,
    "domain": "Nephrology",
    "question": "A 70-year-old man with CKD stage 3 has a serum calcium of 11.8 mg/dL with PTH 12 pg/mL (low), PTHrP elevated. The most likely cause of hypercalcemia is:",
    "options": {
      "A": "Primary hyperparathyroidism",
      "B": "Malignancy-associated hypercalcemia (humoral)",
      "C": "Sarcoidosis",
      "D": "Vitamin D toxicity"
    },
    "answer": "B",
    "explanation": "Hypercalcemia with suppressed PTH + elevated PTHrP = humoral hypercalcemia of malignancy. PTHrP acts on PTH receptors \u2192 bone resorption and renal calcium retention. Most common in squamous cell carcinomas, renal cell carcinoma, breast cancer. PTH is high in primary hyperPTH."
  },
  {
    "id": 144,
    "chapter": 16,
    "domain": "Nephrology",
    "question": "A patient with a serum phosphorus of 7.5 mg/dL and calcium 7.8 mg/dL has CKD stage 4. Which medication is most appropriate to treat hyperphosphatemia while avoiding worsening hypocalcemia?",
    "options": {
      "A": "Calcium carbonate",
      "B": "Sevelamer or lanthanum carbonate",
      "C": "Aluminum hydroxide",
      "D": "Bisphosphonate"
    },
    "answer": "B",
    "explanation": "Non-calcium, non-aluminum phosphate binders (sevelamer, lanthanum) are preferred in CKD with hypocalcemia or vascular calcification. Calcium-based binders worsen hypercalcemia and vascular calcification. Aluminum-based binders cause aluminum toxicity with long-term use. KDIGO recommends non-calcium binders when Ca is high/normal."
  },
  {
    "id": 145,
    "chapter": 16,
    "domain": "Nephrology",
    "question": "A 32-year-old woman with recurrent nephrolithiasis has 24-hour urine calcium >400 mg, low serum PTH, and a history of calcium oxalate stones. She is diagnosed with absorptive hypercalciuria. The most appropriate preventive treatment is:",
    "options": {
      "A": "Thiazide diuretic",
      "B": "High calcium diet to suppress PTH",
      "C": "Urine alkalinization with citrate",
      "D": "Sodium restriction and low-calcium diet"
    },
    "answer": "A",
    "explanation": "Thiazide diuretics (hydrochlorothiazide) reduce urinary calcium excretion by increasing renal tubular calcium reabsorption (DCT) \u2014 preferred for hypercalciuric calcium stone disease. Sodium restriction (reduces calciuria) and adequate calcium intake (binds dietary oxalate) are also important. Low-calcium diet paradoxically increases oxalate absorption."
  },
  {
    "id": 146,
    "chapter": 17,
    "domain": "Nephrology",
    "question": "A 70-year-old man develops oliguria after cardiac surgery. His creatinine rises from 1.0 to 2.8 mg/dL over 48 hours. Urine output is 0.4 mL/kg/hr. Urine sodium is 48 mEq/L, FENa 2.8%, urine microscopy shows muddy brown granular casts. The diagnosis is:",
    "options": {
      "A": "Pre-renal AKI",
      "B": "Acute tubular necrosis (intrinsic AKI)",
      "C": "Post-renal AKI",
      "D": "Contrast-induced nephropathy"
    },
    "answer": "B",
    "explanation": "Muddy brown granular casts are pathognomonic for acute tubular necrosis (ATN). FENa >2% and urine Na >40 indicate tubular dysfunction (pre-renal: FENa <1%, urine Na <20). Post-cardiac surgery ATN results from ischemia-reperfusion injury. Most ATN recovers within 1\u20133 weeks."
  },
  {
    "id": 147,
    "chapter": 17,
    "domain": "Nephrology",
    "question": "A 25-year-old man with no prior renal history presents with abrupt oliguria and uremia 2 weeks after a strep throat infection. Urinalysis shows RBC casts and proteinuria 1.2 g/day. C3 is low, C4 is normal. The diagnosis is:",
    "options": {
      "A": "IgA nephropathy",
      "B": "Post-streptococcal glomerulonephritis",
      "C": "Membranoproliferative GN",
      "D": "Anti-GBM disease"
    },
    "answer": "B",
    "explanation": "Post-streptococcal GN: acute nephritis 1\u20133 weeks after strep pharyngitis/skin infection. RBC casts, low C3, normal C4 (alternate complement pathway activation). Impetigo causes nephritis 3\u20136 weeks later. Usually self-limited in children; adults may progress. IgA nephropathy follows infections by hours-days."
  },
  {
    "id": 148,
    "chapter": 17,
    "domain": "Nephrology",
    "question": "A 45-year-old woman with rheumatoid arthritis on NSAIDs develops AKI with creatinine 3.1 and eosinophiluria. Renal biopsy shows interstitial inflammatory infiltrate with eosinophils. The diagnosis is:",
    "options": {
      "A": "ATN from NSAID toxicity",
      "B": "Acute interstitial nephritis (AIN)",
      "C": "Membranous nephropathy",
      "D": "NSAID-induced minimal change disease"
    },
    "answer": "B",
    "explanation": "Acute interstitial nephritis: drug-induced allergic reaction (NSAIDs, penicillins, PPIs, cephalosporins). Classic triad: fever, rash, eosinophilia (only 10\u201315% show all three). Eosinophiluria (Hansel stain) is suggestive. Biopsy confirms. Treatment: discontinue offending agent; steroids if no improvement in 3\u20135 days."
  },
  {
    "id": 149,
    "chapter": 17,
    "domain": "Nephrology",
    "question": "A 72-year-old diabetic woman undergoes contrast CT of the abdomen. Which intervention best prevents contrast-induced AKI?",
    "options": {
      "A": "N-acetylcysteine 600 mg BID",
      "B": "IV normal saline or sodium bicarbonate hydration pre- and post-procedure",
      "C": "Furosemide IV immediately after contrast",
      "D": "Hold ACE inhibitor only the day of the procedure"
    },
    "answer": "B",
    "explanation": "IV hydration (isotonic saline or sodium bicarbonate at 1 mL/kg/hr for 3\u201312 hours before and after) is the only well-proven intervention for contrast-induced AKI. N-acetylcysteine evidence is weak (conflicting trials). Use minimum contrast volume, avoid concurrent nephrotoxins, consider iso-osmolar contrast in high-risk patients."
  },
  {
    "id": 150,
    "chapter": 17,
    "domain": "Nephrology",
    "question": "A 22-year-old man develops acute renal failure with hemoptysis. Creatinine 4.8 mg/dL, urinalysis shows RBC casts, anti-GBM antibodies positive. The diagnosis is:",
    "options": {
      "A": "Granulomatosis with polyangiitis (Wegener's)",
      "B": "Goodpasture syndrome (anti-GBM disease)",
      "C": "Microscopic polyangiitis",
      "D": "SLE nephritis"
    },
    "answer": "B",
    "explanation": "Goodpasture syndrome: anti-GBM antibodies attack type IV collagen in alveolar and glomerular basement membranes \u2192 pulmonary hemorrhage + rapidly progressive GN. Linear IgG deposits on immunofluorescence. Treatment: plasmapheresis (remove anti-GBM antibodies) + cyclophosphamide + prednisone. Urgent \u2014 renal failure is rapid."
  },
  {
    "id": 151,
    "chapter": 17,
    "domain": "Nephrology",
    "question": "Which finding on urine microscopy is pathognomonic for acute tubular necrosis?",
    "options": {
      "A": "WBC casts",
      "B": "RBC casts",
      "C": "Muddy brown granular casts",
      "D": "Fatty casts"
    },
    "answer": "C",
    "explanation": "Muddy brown granular (epithelial) casts = ATN. WBC casts = pyelonephritis or interstitial nephritis. RBC casts = glomerulonephritis. Fatty casts ('Maltese cross' under polarized light) = nephrotic syndrome. Waxy casts = advanced CKD."
  },
  {
    "id": 152,
    "chapter": 17,
    "domain": "Nephrology",
    "question": "Rhabdomyolysis-induced AKI is best treated with:",
    "options": {
      "A": "Furosemide to prevent tubular myoglobin precipitation",
      "B": "Aggressive IV fluid resuscitation to maintain urine output >200\u2013300 mL/hour",
      "C": "Immediate hemodialysis",
      "D": "N-acetylcysteine"
    },
    "answer": "B",
    "explanation": "Rhabdomyolysis: massive IV fluid resuscitation (1\u20131.5 L/hr NS initially) to maintain urine output >200\u2013300 mL/hr, diluting myoglobin and preventing tubular precipitation. Urine alkalinization (NaHCO3) is controversial. Furosemide should be avoided as it acidifies urine and worsens myoglobin toxicity."
  },
  {
    "id": 153,
    "chapter": 17,
    "domain": "Nephrology",
    "question": "Which of the following is the most common cause of AKI in hospitalized patients?",
    "options": {
      "A": "Contrast nephropathy",
      "B": "Pre-renal azotemia (volume depletion or decreased effective circulating volume)",
      "C": "Acute tubular necrosis from sepsis",
      "D": "Obstruction"
    },
    "answer": "B",
    "explanation": "Pre-renal AKI accounts for ~60\u201370% of hospital-acquired AKI. Volume depletion (hemorrhage, GI losses, diuretics), decreased effective circulating volume (heart failure, cirrhosis, sepsis), and medications (NSAIDs, ACE inhibitors reducing GFR) are the most common causes. FENa <1% and rapid response to fluids confirm pre-renal etiology."
  },
  {
    "id": 154,
    "chapter": 18,
    "domain": "Nephrology",
    "question": "A 58-year-old diabetic man has eGFR 28 mL/min/1.73m\u00b2 and urine albumin-to-creatinine ratio of 420 mg/g. His hemoglobin is 9.8 g/dL with normal iron studies, low reticulocyte count, and low EPO. The most appropriate treatment for his anemia is:",
    "options": {
      "A": "Oral iron supplementation",
      "B": "IV iron only",
      "C": "Erythropoiesis-stimulating agent (ESA) + iron",
      "D": "Blood transfusion"
    },
    "answer": "C",
    "explanation": "Anemia of CKD is normocytic, normochromic, caused by EPO deficiency. ESA therapy (epoetin alfa, darbepoetin) targets hemoglobin 10\u201311.5 g/dL in non-dialysis CKD. Iron is essential concurrently (target ferritin >200, TSAT >20%). Avoid targeting >13 g/dL (TREAT trial: increased stroke risk)."
  },
  {
    "id": 155,
    "chapter": 18,
    "domain": "Nephrology",
    "question": "A 65-year-old woman with CKD stage 4 (eGFR 22) and diabetes is on metformin. Her creatinine has been stable for 6 months. Which statement about metformin use is correct?",
    "options": {
      "A": "Metformin must be discontinued at eGFR <30 due to lactic acidosis risk",
      "B": "Metformin is safe at any GFR in diabetic kidney disease",
      "C": "Metformin causes direct nephrotoxicity",
      "D": "Metformin must be discontinued when eGFR <45"
    },
    "answer": "A",
    "explanation": "FDA guidance: metformin can be continued at eGFR 30\u201344 with caution and more frequent monitoring. At eGFR <30, metformin is contraindicated due to accumulation and risk of lactic acidosis (metformin excreted renally). Dose reduction at eGFR 30\u201345. Discontinue if eGFR drops below 30."
  },
  {
    "id": 156,
    "chapter": 18,
    "domain": "Nephrology",
    "question": "A 50-year-old man with CKD stage 5 (eGFR 8) has calcium 7.6, phosphorus 8.2, PTH 850 pg/mL. He has bone pain and radiographic subperiosteal bone resorption. The diagnosis and initial treatment are:",
    "options": {
      "A": "Osteoporosis \u2014 bisphosphonate",
      "B": "Secondary hyperparathyroidism/renal osteodystrophy \u2014 phosphate binders + vitamin D analog",
      "C": "Primary hyperparathyroidism \u2014 parathyroidectomy",
      "D": "Paget's disease \u2014 calcitonin"
    },
    "answer": "B",
    "explanation": "Secondary hyperPTH in CKD: phosphate retention \u2192 hypocalcemia \u2192 PTH stimulus \u2192 PTH-mediated bone resorption (osteitis fibrosa cystica). Treatment: dietary phosphate restriction + phosphate binders + active vitamin D analog (calcitriol or paricalcitol to suppress PTH) + calcimimetics (cinacalcet). Dialysis may be needed."
  },
  {
    "id": 157,
    "chapter": 18,
    "domain": "Nephrology",
    "question": "A dialysis patient develops an infection of his tunneled dialysis catheter. Blood cultures grow S. aureus. The catheter cannot be removed immediately. Which antibiotic is most appropriate?",
    "options": {
      "A": "Nafcillin",
      "B": "Vancomycin (renally adjusted)",
      "C": "Oral clindamycin",
      "D": "Cefazolin"
    },
    "answer": "B",
    "explanation": "Catheter-related bloodstream infections in dialysis patients: vancomycin is preferred empirically (MRSA coverage, renally dosable). Dose is given at end of dialysis session (removed by dialysis). Duration: 3 weeks for uncomplicated S. aureus bacteremia (6 weeks if endocarditis suspected). Remove catheter when possible."
  },
  {
    "id": 158,
    "chapter": 18,
    "domain": "Nephrology",
    "question": "A 62-year-old woman with ESRD on hemodialysis misses two sessions. She presents with dyspnea, pericardial friction rub, and crackles. K+ is 6.9 mEq/L. The most urgent intervention is:",
    "options": {
      "A": "IV furosemide",
      "B": "Urgent hemodialysis",
      "C": "Cardiac catheterization",
      "D": "IV sodium bicarbonate"
    },
    "answer": "B",
    "explanation": "This patient has uremic pericarditis, fluid overload, and life-threatening hyperkalemia \u2014 absolute indications for urgent dialysis. Uremic pericarditis can progress to tamponade. Furosemide is ineffective in ESRD (anuric patient). Immediate dialysis is the only effective treatment for this constellation."
  },
  {
    "id": 159,
    "chapter": 18,
    "domain": "Nephrology",
    "question": "Which of the following medications should be dose-adjusted in CKD stage 4 (eGFR 20\u201329) due to renal excretion?",
    "options": {
      "A": "Amlodipine",
      "B": "Atorvastatin",
      "C": "Gabapentin",
      "D": "Omeprazole"
    },
    "answer": "C",
    "explanation": "Gabapentin is renally excreted unchanged \u2014 significant dose reduction required at eGFR <60, and especially at <30 to prevent toxic accumulation (somnolence, ataxia, encephalopathy). Amlodipine and atorvastatin are hepatically metabolized. Omeprazole is hepatically metabolized. Nephrology pharmacist review is essential in CKD."
  },
  {
    "id": 160,
    "chapter": 18,
    "domain": "Nephrology",
    "question": "The most common cause of ESRD in the United States is:",
    "options": {
      "A": "IgA nephropathy",
      "B": "Hypertensive nephrosclerosis",
      "C": "Diabetic kidney disease",
      "D": "Polycystic kidney disease"
    },
    "answer": "C",
    "explanation": "Diabetic kidney disease (diabetic nephropathy) accounts for ~44% of all new cases of ESRD in the US. Hypertensive nephrosclerosis is #2 (~28%). Key prevention: tight glycemic control (A1c <7%), BP control (ACE inhibitor/ARB), and SGLT2 inhibitors (CREDENCE, DAPA-CKD trials show renal protection)."
  },
  {
    "id": 161,
    "chapter": 18,
    "domain": "Nephrology",
    "question": "An SGLT2 inhibitor is being considered in a patient with proteinuric CKD (eGFR 38, UACR 680 mg/g) and type 2 diabetes. Which best describes the renal protective mechanism?",
    "options": {
      "A": "Reduces glomerular hyperfiltration by constricting the afferent arteriole",
      "B": "Reduces intraglomerular pressure via tubuloglomerular feedback (afferent vasoconstriction)",
      "C": "Direct anti-inflammatory effect on podocytes",
      "D": "Reduces albuminuria only through blood pressure lowering"
    },
    "answer": "B",
    "explanation": "SGLT2 inhibitors block proximal tubular glucose/sodium cotransport \u2192 increased sodium delivery to macula densa \u2192 tubuloglomerular feedback \u2192 afferent arteriolar constriction \u2192 reduced intraglomerular pressure \u2192 reduced hyperfiltration and proteinuria. This is the primary renal protective mechanism (CREDENCE, DAPA-CKD, EMPA-KIDNEY trials)."
  },
  {
    "id": 162,
    "chapter": 19,
    "domain": "Endocrinology",
    "question": "A 35-year-old woman presents with heat intolerance, weight loss, tremor, and palpitations. She has a diffuse goiter and exophthalmos. TSH is <0.01 mIU/L, free T4 is 4.2 ng/dL. TSH receptor antibodies are elevated. The diagnosis is:",
    "options": {
      "A": "Toxic multinodular goiter",
      "B": "Graves' disease",
      "C": "Subacute thyroiditis",
      "D": "Toxic adenoma"
    },
    "answer": "B",
    "explanation": "Graves' disease: autoimmune hyperthyroidism caused by TSH receptor stimulating antibodies (TRAb). Classic triad: diffuse goiter, exophthalmos (Graves ophthalmopathy), pretibial myxedema. Radioactive iodine uptake is diffusely elevated. Treatment: antithyroid drugs (methimazole), radioactive iodine ablation, or thyroidectomy."
  },
  {
    "id": 163,
    "chapter": 19,
    "domain": "Endocrinology",
    "question": "A 45-year-old woman has hypothyroidism with TSH 48 mIU/L and free T4 0.4 ng/dL. She has mild symptoms. Which is the appropriate starting levothyroxine dose in this otherwise healthy patient?",
    "options": {
      "A": "Full replacement dose (1.6 mcg/kg/day)",
      "B": "25 mcg/day, increased slowly",
      "C": "200 mcg/day immediately",
      "D": "T3 (liothyronine) alone"
    },
    "answer": "A",
    "explanation": "In otherwise healthy adults <60 years, full replacement levothyroxine (1.6 mcg/kg/day) can be started immediately. In elderly patients or those with coronary artery disease, start with 25\u201350 mcg/day and titrate slowly (cardiac risk from rapid increase in metabolic demand). TSH is rechecked in 6\u20138 weeks."
  },
  {
    "id": 164,
    "chapter": 19,
    "domain": "Endocrinology",
    "question": "A 52-year-old woman is found to have a 2.1 cm thyroid nodule. TSH is normal. Ultrasound shows a hypoechoic nodule with irregular margins and microcalcifications. The next step is:",
    "options": {
      "A": "CT scan of the neck",
      "B": "Fine needle aspiration biopsy (FNA)",
      "C": "Repeat ultrasound in 6 months",
      "D": "Radioactive iodine scan"
    },
    "answer": "B",
    "explanation": "ACR TI-RADS guidelines: suspicious ultrasound features (hypoechoic, irregular margins, microcalcifications, taller than wide, rim calcification with soft tissue component) warrant FNA for nodules \u22651 cm. FNA is the definitive diagnostic step. RAI scan is used when TSH is suppressed (suspicious for hot/autonomous nodule)."
  },
  {
    "id": 165,
    "chapter": 19,
    "domain": "Endocrinology",
    "question": "A 68-year-old woman with adrenal insufficiency is admitted for hip fracture surgery. She is on hydrocortisone 20 mg/10 mg (morning/afternoon) at home. Which perioperative steroid protocol is appropriate?",
    "options": {
      "A": "Continue home dose only",
      "B": "Hold steroids for 24 hours to assess adrenal function",
      "C": "Stress dose steroids: hydrocortisone 50\u2013100 mg IV q8h during surgery and taper over 1\u20133 days",
      "D": "Increase oral dose by 50% only"
    },
    "answer": "C",
    "explanation": "Adrenal insufficiency patients require stress-dose steroids for major surgery (cortisol response to surgical stress is impaired). Protocol: hydrocortisone 50\u2013100 mg IV q8h starting morning of surgery, then taper to maintenance over 1\u20133 days as clinically tolerated. Failure to provide stress dosing \u2192 adrenal crisis."
  },
  {
    "id": 166,
    "chapter": 19,
    "domain": "Endocrinology",
    "question": "A 45-year-old woman has persistent hypertension, hypokalemia, and central obesity. 24-hour urine cortisol is 4\u00d7 upper normal, midnight salivary cortisol is elevated, and 1 mg overnight dexamethasone suppression test fails to suppress cortisol. MRI shows a 6 mm pituitary adenoma. The diagnosis is:",
    "options": {
      "A": "Adrenal Cushing syndrome",
      "B": "Cushing disease (ACTH-secreting pituitary adenoma)",
      "C": "Ectopic ACTH syndrome",
      "D": "Adrenal incidentaloma"
    },
    "answer": "B",
    "explanation": "Cushing disease = pituitary ACTH-secreting adenoma causing bilateral adrenal cortisol overproduction. ACTH is elevated (vs. suppressed in adrenal Cushing). Inferior petrosal sinus sampling confirms pituitary source when imaging is equivocal. Treatment: transsphenoidal surgery."
  },
  {
    "id": 167,
    "chapter": 19,
    "domain": "Endocrinology",
    "question": "A 38-year-old man with MEN2A has a 4 cm adrenal mass found incidentally. His 24-hour urine catecholamines and plasma metanephrines are markedly elevated. Before any surgical procedure, which medication must be started first?",
    "options": {
      "A": "Beta-blocker",
      "B": "Alpha-blocker (phenoxybenzamine or doxazosin)",
      "C": "Calcium channel blocker",
      "D": "IV saline hydration only"
    },
    "answer": "B",
    "explanation": "Pheochromocytoma pre-operative management: alpha-blockade FIRST (phenoxybenzamine 10 mg BID, titrate over 1\u20132 weeks) to prevent hypertensive crisis during surgery. Beta-blockers added AFTER alpha-blockade (never first \u2014 beta-blockade without alpha coverage leaves alpha receptors unopposed \u2192 severe hypertensive crisis)."
  },
  {
    "id": 168,
    "chapter": 19,
    "domain": "Endocrinology",
    "question": "A 55-year-old woman has TSH 0.02 and free T4 1.4 ng/dL (normal). She has no symptoms of hyperthyroidism. The diagnosis and management are:",
    "options": {
      "A": "Overt hyperthyroidism \u2014 start methimazole",
      "B": "Subclinical hyperthyroidism \u2014 observe or treat based on TSH level and risk factors",
      "C": "Normal thyroid function \u2014 no action needed",
      "D": "Central hypothyroidism \u2014 check free T4 only"
    },
    "answer": "B",
    "explanation": "Subclinical hyperthyroidism: suppressed TSH with normal free T4/T3. Management depends on TSH level and patient risk: TSH <0.1 in patients >65 or with AF/osteoporosis \u2192 treatment. TSH 0.1\u20130.5 \u2192 observe. This patient (TSH 0.02) meets criteria for treatment consideration, especially given age >50."
  },
  {
    "id": 169,
    "chapter": 19,
    "domain": "Endocrinology",
    "question": "Primary adrenal insufficiency (Addison's disease) is differentiated from secondary adrenal insufficiency by:",
    "options": {
      "A": "Degree of cortisol deficiency",
      "B": "Presence of mineralocorticoid deficiency and elevated ACTH in primary; no mineralocorticoid deficiency and low ACTH in secondary",
      "C": "Response to ACTH stimulation test",
      "D": "Presence of autoantibodies"
    },
    "answer": "B",
    "explanation": "Primary AI: adrenal destruction \u2192 cortisol + mineralocorticoid deficiency + elevated ACTH (hyperpigmentation from ACTH/MSH). Secondary AI (pituitary): ACTH deficiency \u2192 cortisol deficiency only (mineralocorticoid preserved via renin-angiotensin), ACTH is low or inappropriately normal. Both show inadequate cortisol response to ACTH stim test."
  },
  {
    "id": 170,
    "chapter": 19,
    "domain": "Endocrinology",
    "question": "A 30-year-old woman with Hashimoto's thyroiditis is found to have TSH 7.8 mIU/L and free T4 within normal range. She complains of mild fatigue. The diagnosis is:",
    "options": {
      "A": "Overt hypothyroidism \u2014 start levothyroxine",
      "B": "Subclinical hypothyroidism \u2014 consider treatment if symptomatic or planning pregnancy",
      "C": "Euthyroid sick syndrome",
      "D": "Normal thyroid function"
    },
    "answer": "B",
    "explanation": "Subclinical hypothyroidism: elevated TSH with normal free T4. Treatment recommended if: TSH >10, symptoms, pregnancy (or planning), age <65. For TSH 5\u201310 with mild symptoms: treatment reasonable. Her fatigue supports treatment. Levothyroxine started at low dose with recheck in 6\u20138 weeks."
  },
  {
    "id": 171,
    "chapter": 19,
    "domain": "Endocrinology",
    "question": "A 25-year-old man has episodes of severe headache, sweating, and palpitations with BP 210/115 during episodes. 24-hour urine normetanephrine is markedly elevated. After alpha-blockade, which imaging study is performed first?",
    "options": {
      "A": "MRI adrenals (preferred for initial imaging)",
      "B": "Nuclear 123-I MIBG scan",
      "C": "CT abdomen and pelvis with contrast",
      "D": "PET scan with DOPA"
    },
    "answer": "A",
    "explanation": "For pheochromocytoma: biochemical confirmation first (plasma/urine metanephrines), then anatomic imaging. MRI adrenals is preferred for initial localization (no radiation, bright T2 signal of pheo, better for paragangliomas). CT is also acceptable. MIBG scintigraphy is reserved for metastatic/multifocal/extra-adrenal disease."
  },
  {
    "id": 172,
    "chapter": 20,
    "domain": "Endocrinology",
    "question": "A 52-year-old man with type 2 diabetes has A1c 9.8% on metformin 1000 mg BID. He weighs 102 kg (BMI 34), has ASCVD (prior MI). Which add-on medication has the strongest evidence for reducing cardiovascular mortality in this patient?",
    "options": {
      "A": "Sulfonylurea (glipizide)",
      "B": "GLP-1 receptor agonist (semaglutide or liraglutide)",
      "C": "DPP-4 inhibitor (sitagliptin)",
      "D": "Thiazolidinedione (pioglitazone)"
    },
    "answer": "B",
    "explanation": "In T2DM with established ASCVD, GLP-1 RAs (semaglutide \u2014 SUSTAIN-6, PIONEER 6; liraglutide \u2014 LEADER) and SGLT2 inhibitors (empagliflozin \u2014 EMPA-REG; canagliflozin \u2014 CANVAS) reduce MACE. GLP-1 RAs also promote weight loss. SGLT2 inhibitors preferred if HF or CKD is present. DPP-4 inhibitors are CV-neutral."
  },
  {
    "id": 173,
    "chapter": 20,
    "domain": "Endocrinology",
    "question": "A 45-year-old woman with T2DM has an A1c of 8.2% and eGFR of 35. She has heart failure with EF 35%. Which antidiabetic agent is preferred?",
    "options": {
      "A": "GLP-1 agonist",
      "B": "SGLT2 inhibitor (dapagliflozin or empagliflozin)",
      "C": "Sulfonylurea",
      "D": "Insulin glargine"
    },
    "answer": "B",
    "explanation": "SGLT2 inhibitors are preferred in T2DM with HFrEF (EMPEROR-Reduced, DAPA-HF showed reduced HF hospitalization and CV death), and in proteinuric CKD. They are safe at eGFR \u226520 for HF/CKD indications (though glucose-lowering effect is minimal at eGFR <45). Avoid sulfonylureas with eGFR <30 (hypoglycemia risk from accumulation)."
  },
  {
    "id": 174,
    "chapter": 20,
    "domain": "Endocrinology",
    "question": "A 28-year-old woman with type 1 diabetes has recurrent DKA. She is poorly compliant. Her A1c is 11.2%. Which insulin regimen is most appropriate?",
    "options": {
      "A": "Basal insulin only (glargine 20 units at bedtime)",
      "B": "Basal-bolus regimen (long-acting insulin + rapid-acting insulin before meals)",
      "C": "NPH insulin BID",
      "D": "Premixed insulin 70/30 twice daily"
    },
    "answer": "B",
    "explanation": "Type 1 diabetes requires basal-bolus insulin (multiple daily injections or continuous subcutaneous insulin pump). Basal insulin (glargine, detemir, degludec) suppresses hepatic glucose production; bolus insulin (aspart, lispro, glulisine) covers meals and corrections. This closely mimics physiologic insulin secretion and reduces A1c most effectively."
  },
  {
    "id": 175,
    "chapter": 20,
    "domain": "Endocrinology",
    "question": "The Somogyi effect in diabetes refers to:",
    "options": {
      "A": "Morning hyperglycemia due to the dawn phenomenon (GH and cortisol surge)",
      "B": "Rebound hyperglycemia after overnight hypoglycemia triggering counterregulatory hormones",
      "C": "Hypoglycemia at 3 AM due to excessive evening insulin",
      "D": "Waning of insulin effect by early morning"
    },
    "answer": "B",
    "explanation": "Somogyi effect (posthypoglycemic hyperglycemia): nocturnal hypoglycemia triggers counterregulatory hormones (glucagon, epinephrine, cortisol, GH) \u2192 rebound morning hyperglycemia. Differentiated from dawn phenomenon by checking 3 AM glucose: low = Somogyi, normal-to-high = dawn. Management: reduce evening insulin for Somogyi."
  },
  {
    "id": 176,
    "chapter": 20,
    "domain": "Endocrinology",
    "question": "A patient with T1DM presents with pH 7.12, glucose 420, bicarbonate 9, anion gap 22, and potassium 5.2 mEq/L. Insulin infusion is started. What is the critical first step before starting insulin?",
    "options": {
      "A": "Administer sodium bicarbonate",
      "B": "Confirm potassium is \u22653.5 mEq/L and replace if needed",
      "C": "Bolus 20 units regular insulin IV",
      "D": "Start dextrose to prevent hypoglycemia"
    },
    "answer": "B",
    "explanation": "Before starting insulin in DKA: potassium must be \u22653.5 mEq/L. Insulin drives K+ into cells, dropping serum K+ by 0.5\u20131.0 mEq/L per hour. If K+ <3.5, give IV KCl FIRST before insulin to prevent life-threatening hypokalemia/arrhythmias. This patient's K+ is 5.2, so insulin can be started (but K+ monitoring every 1\u20132 hours is essential)."
  },
  {
    "id": 177,
    "chapter": 20,
    "domain": "Endocrinology",
    "question": "A 68-year-old man with T2DM and A1c 7.4% presents with a hypoglycemic episode (glucose 42 mg/dL) after his glipizide dose was doubled last week. He is confused but can swallow. The appropriate management is:",
    "options": {
      "A": "IV glucagon 1 mg IM",
      "B": "Oral fast-acting glucose (15\u201320 g) followed by reassessment in 15 minutes",
      "C": "IV 50% dextrose (D50) 50 mL",
      "D": "Hold all diabetes medications and observe"
    },
    "answer": "B",
    "explanation": "Hypoglycemia treatment (conscious patient who can swallow): Rule of 15 \u2014 15 g fast-acting carbohydrate (4 oz juice, 3\u20134 glucose tablets), recheck in 15 minutes, repeat if still <70. Reserve D50 IV for unconscious or unable-to-swallow patients. Glucagon IM for unconscious patients without IV access."
  },
  {
    "id": 178,
    "chapter": 20,
    "domain": "Endocrinology",
    "question": "Metformin's primary mechanism of action in T2DM is:",
    "options": {
      "A": "Stimulates pancreatic beta cell insulin secretion",
      "B": "Inhibits hepatic gluconeogenesis and activates AMPK",
      "C": "Increases insulin sensitivity in peripheral fat tissue",
      "D": "Blocks intestinal glucose absorption"
    },
    "answer": "B",
    "explanation": "Metformin primarily inhibits hepatic gluconeogenesis (reduces fasting glucose) through activation of AMPK, which inhibits hepatic lipid synthesis and glucose output. It also improves peripheral insulin sensitivity. It does NOT stimulate insulin secretion (no hypoglycemia risk, weight neutral). Also reduces all-cause mortality in T2DM (UKPDS)."
  },
  {
    "id": 179,
    "chapter": 20,
    "domain": "Endocrinology",
    "question": "A T2DM patient on basal insulin glargine has fasting glucose consistently 180\u2013210 mg/dL. His bedtime glucose is 95 mg/dL. The appropriate adjustment is:",
    "options": {
      "A": "Increase glargine dose by 2 units every 3 days until fasting glucose 80\u2013130",
      "B": "Add prandial insulin before all meals",
      "C": "Switch to NPH insulin",
      "D": "Reduce bedtime snack"
    },
    "answer": "A",
    "explanation": "When fasting glucose is above target on basal insulin, increase basal dose by 2 units every 3 days (titrate to fasting goal 80\u2013130 mg/dL). Bedtime glucose 95 is acceptable \u2014 room to increase glargine safely. Prandial insulin is added when A1c remains above goal despite optimized basal insulin."
  },
  {
    "id": 180,
    "chapter": 20,
    "domain": "Endocrinology",
    "question": "Which complication of T2DM is specifically screened for with the urine albumin-to-creatinine ratio (UACR)?",
    "options": {
      "A": "Diabetic neuropathy",
      "B": "Diabetic nephropathy",
      "C": "Diabetic retinopathy",
      "D": "Diabetic cardiomyopathy"
    },
    "answer": "B",
    "explanation": "Diabetic nephropathy screening: annual UACR (spot urine) + eGFR in T2DM starting at diagnosis, and in T1DM after 5 years. Microalbuminuria (UACR 30\u2013300 mg/g) is the earliest marker of nephropathy. RAAS blockade (ACE inhibitor/ARB) slows progression when UACR >30. Retinopathy screened by annual dilated fundus exam."
  },
  {
    "id": 181,
    "chapter": 20,
    "domain": "Endocrinology",
    "question": "The minimum target A1c for most patients with T2DM per ADA 2025 Standards of Care is:",
    "options": {
      "A": "<6.0%",
      "B": "<7.0%",
      "C": "<7.5%",
      "D": "<8.0%"
    },
    "answer": "B",
    "explanation": "ADA 2025: A1c goal <7.0% for most non-pregnant adults with T2DM. Less stringent goals (7.5\u20138.0%) for patients with hypoglycemia unawareness, limited life expectancy, extensive comorbidities, or difficulty achieving goal. Tighter goals (6.0\u20136.5%) for selected patients with short disease duration, no CVD, long life expectancy."
  },
  {
    "id": 182,
    "chapter": 21,
    "domain": "Endocrinology",
    "question": "A 48-year-old man with abdominal obesity (waist circumference 104 cm), triglycerides 220 mg/dL, HDL 36 mg/dL, BP 134/86, and fasting glucose 108 mg/dL is evaluated. He meets criteria for which condition?",
    "options": {
      "A": "Metabolic syndrome (3 of 5 ATP III criteria met)",
      "B": "Prediabetes only",
      "C": "Type 2 diabetes",
      "D": "Hypertriglyceridemia only"
    },
    "answer": "A",
    "explanation": "ATP III/AHA metabolic syndrome criteria (3 of 5): abdominal obesity (waist >102 cm men, >88 cm women) \u2713, triglycerides \u2265150 \u2713, HDL <40 men/<50 women \u2713, BP \u2265130/85 \u2713, fasting glucose \u2265100 \u2713. This patient meets all 5 criteria. 2\u00d7 cardiovascular risk, 5\u00d7 diabetes risk. Lifestyle intervention is primary treatment."
  },
  {
    "id": 183,
    "chapter": 21,
    "domain": "Endocrinology",
    "question": "A 55-year-old woman with T2DM and established CAD has LDL 122 mg/dL on atorvastatin 20 mg. Her LDL target is <70 mg/dL. The most appropriate next step is:",
    "options": {
      "A": "Continue current dose and recheck in 1 year",
      "B": "Uptitrate to high-intensity statin (atorvastatin 40\u201380 mg or rosuvastatin 20\u201340 mg)",
      "C": "Add ezetimibe immediately",
      "D": "Switch to a PCSK9 inhibitor"
    },
    "answer": "B",
    "explanation": "ACC/AHA guidelines: established ASCVD (very high risk) \u2192 high-intensity statin as first step (atorvastatin 40\u201380 mg, rosuvastatin 20\u201340 mg). If LDL remains >70 on maximum tolerated statin \u2192 add ezetimibe. If still >70 \u2192 add PCSK9 inhibitor (evolocumab, alirocumab). Do not skip statin intensification."
  },
  {
    "id": 184,
    "chapter": 21,
    "domain": "Endocrinology",
    "question": "A patient with severe hypertriglyceridemia (TG 1,200 mg/dL) develops acute pancreatitis. The immediate management for the hypertriglyceridemia in addition to pancreatitis treatment is:",
    "options": {
      "A": "Start statin",
      "B": "Insulin infusion (which activates lipoprotein lipase) \u00b1 plasmapheresis",
      "C": "High-dose niacin",
      "D": "Gemfibrozil immediately"
    },
    "answer": "B",
    "explanation": "Severe hypertriglyceridemia (TG >500 mg/dL) causing pancreatitis: insulin infusion activates lipoprotein lipase, rapidly reducing TG levels. NPO reduces chylomicron production. Plasmapheresis is reserved for TG >2,000 or refractory cases. Statins/fibrates are long-term therapy after acute phase resolves."
  },
  {
    "id": 185,
    "chapter": 21,
    "domain": "Endocrinology",
    "question": "Which fibrate is associated with rhabdomyolysis when combined with statins and should generally be avoided in combination?",
    "options": {
      "A": "Fenofibrate",
      "B": "Gemfibrozil",
      "C": "Bezafibrate",
      "D": "Both fenofibrate and gemfibrozil equally"
    },
    "answer": "B",
    "explanation": "Gemfibrozil inhibits the glucuronidation of statins (via CYP inhibition and OATP1B1 transporter inhibition), significantly increasing statin plasma levels \u2192 rhabdomyolysis risk. Fenofibrate does NOT inhibit statin metabolism and can be safely combined with statins. Avoid gemfibrozil + statin combinations."
  },
  {
    "id": 186,
    "chapter": 21,
    "domain": "Endocrinology",
    "question": "A 40-year-old obese woman (BMI 38) with T2DM, hypertension, and OSA is counseled about bariatric surgery. Which statement is most accurate?",
    "options": {
      "A": "Surgery should be considered only after failure of all medications",
      "B": "Roux-en-Y gastric bypass achieves T2DM remission in 50\u201380% of patients at 2 years",
      "C": "BMI \u226550 is required for bariatric surgery eligibility",
      "D": "Surgery does not affect cardiovascular outcomes"
    },
    "answer": "B",
    "explanation": "Bariatric surgery (Roux-en-Y gastric bypass, sleeve gastrectomy) achieves T2DM remission in 50\u201380% of patients at 2 years, independent of weight loss alone. Eligibility: BMI \u226540 or \u226535 with serious comorbidities (T2DM, OSA, HTN). The STAMPEDE and SLEEVEPASS trials confirmed metabolic benefits over intensive medical therapy."
  },
  {
    "id": 187,
    "chapter": 22,
    "domain": "Hematology",
    "question": "A 28-year-old woman has progressive fatigue. CBC: hemoglobin 8.2 g/dL, MCV 68 fL, MCHC low, serum iron 35 mcg/dL, TIBC 480 mcg/dL, ferritin 4 ng/mL, reticulocyte count low. The diagnosis and treatment are:",
    "options": {
      "A": "Anemia of chronic disease \u2014 EPO",
      "B": "Iron deficiency anemia \u2014 find source and oral iron supplementation",
      "C": "Thalassemia \u2014 no treatment needed",
      "D": "Sideroblastic anemia \u2014 pyridoxine"
    },
    "answer": "B",
    "explanation": "Iron deficiency anemia: low MCV, low ferritin (<30, very low <10 confirms IDA), low serum iron, high TIBC, low transferrin saturation. Treatment: oral ferrous sulfate 325 mg TID with vitamin C. Identify the source (GI blood loss most common in adults). IV iron for malabsorption or intolerance."
  },
  {
    "id": 188,
    "chapter": 22,
    "domain": "Hematology",
    "question": "A 65-year-old man has hemoglobin 9.4 g/dL, MCV 72, serum iron 40 mcg/dL, TIBC 180 mcg/dL (low), ferritin 280 ng/mL (elevated). He has rheumatoid arthritis. The diagnosis is:",
    "options": {
      "A": "Iron deficiency anemia",
      "B": "Anemia of chronic disease/inflammation",
      "C": "Thalassemia",
      "D": "Sideroblastic anemia"
    },
    "answer": "B",
    "explanation": "Anemia of chronic disease (ACD): normocytic-to-mildly microcytic, low serum iron, low TIBC (vs. high in IDA), elevated/normal ferritin, elevated hepcidin. Hepcidin blocks iron release from reticuloendothelial stores. Treat the underlying disease. ESA and IV iron if severe/symptomatic."
  },
  {
    "id": 189,
    "chapter": 22,
    "domain": "Hematology",
    "question": "A 72-year-old man has hemoglobin 7.8 g/dL, MCV 112 fL, elevated homocysteine, normal methylmalonic acid, and low folate. The most likely diagnosis is:",
    "options": {
      "A": "Vitamin B12 deficiency",
      "B": "Folate deficiency",
      "C": "Liver disease",
      "D": "Medications (hydroxyurea)"
    },
    "answer": "B",
    "explanation": "Folate deficiency: macrocytic anemia, elevated homocysteine, NORMAL methylmalonic acid (B12 deficiency \u2192 elevated MMA). Causes: poor diet, alcohol, pregnancy, malabsorption (celiac), methotrexate. Treatment: folic acid 1\u20135 mg/day. Always check B12 before treating folate (folate can mask B12 deficiency neurologically)."
  },
  {
    "id": 190,
    "chapter": 22,
    "domain": "Hematology",
    "question": "A 55-year-old patient with sickle cell disease presents with fever, chest pain, hypoxia, and a new bilateral infiltrate on CXR. The diagnosis is:",
    "options": {
      "A": "Pneumococcal pneumonia",
      "B": "Acute chest syndrome",
      "C": "Pulmonary embolism",
      "D": "Vaso-occlusive crisis"
    },
    "answer": "B",
    "explanation": "Acute chest syndrome (ACS) in sickle cell disease: new pulmonary infiltrate + chest pain + fever \u00b1 hypoxia. It is the leading cause of death in SCD. Treatment: oxygen, IV fluids, analgesia, antibiotics (pneumonia overlap), incentive spirometry, and exchange transfusion for severe cases (HbS <30% target)."
  },
  {
    "id": 191,
    "chapter": 22,
    "domain": "Hematology",
    "question": "A 35-year-old woman presents with fatigue, jaundice, and dark urine. DAT (Coombs test) is positive. LDH is elevated, haptoglobin is undetectable, and blood smear shows spherocytes. The diagnosis is:",
    "options": {
      "A": "Hereditary spherocytosis",
      "B": "Autoimmune hemolytic anemia (AIHA)",
      "C": "Microangiopathic hemolytic anemia (TTP)",
      "D": "G6PD deficiency"
    },
    "answer": "B",
    "explanation": "AIHA: positive DAT (direct antiglobulin test/Coombs), spherocytes, elevated indirect bilirubin/LDH, low haptoglobin (hemoglobin-haptoglobin complex removed by liver). Warm AIHA (IgG): treated with prednisone. Cold AIHA (IgM): avoid cold exposure, rituximab. Hereditary spherocytosis: DAT negative."
  },
  {
    "id": 192,
    "chapter": 22,
    "domain": "Hematology",
    "question": "Which blood smear finding is characteristic of microangiopathic hemolytic anemia (MAHA) seen in TTP and HUS?",
    "options": {
      "A": "Spherocytes",
      "B": "Target cells",
      "C": "Schistocytes (helmet cells)",
      "D": "Teardrop cells"
    },
    "answer": "C",
    "explanation": "Schistocytes (fragmented RBCs, helmet-shaped cells) are the hallmark of microangiopathic hemolytic anemia (MAHA), caused by mechanical shearing of RBCs in fibrin-thrombi-filled microvasculature (TTP, HUS, DIC, malignant HTN, HELLP syndrome). TTP: MAHA + thrombocytopenia + fever + neurological sx + renal failure."
  },
  {
    "id": 193,
    "chapter": 22,
    "domain": "Hematology",
    "question": "A 25-year-old Black man develops acute hemolytic anemia after starting primaquine for malaria prophylaxis. The most likely diagnosis is:",
    "options": {
      "A": "Sickle cell trait",
      "B": "G6PD deficiency",
      "C": "Hereditary spherocytosis",
      "D": "Pyruvate kinase deficiency"
    },
    "answer": "B",
    "explanation": "G6PD deficiency: X-linked recessive, most common in African, Mediterranean, and Asian men. G6PD generates NADPH to protect RBCs from oxidative stress. Triggers: primaquine, dapsone, nitrofurantoin, rasburicase, fava beans, infections. Blood smear: bite cells, Heinz bodies. Hemolysis resolves when trigger removed."
  },
  {
    "id": 194,
    "chapter": 22,
    "domain": "Hematology",
    "question": "A 40-year-old woman presents with fatigue and peripheral blood smear shows hypersegmented neutrophils and macrocytic anemia. Serum B12 is undetectable and anti-intrinsic factor antibodies are positive. What neurological complication must be screened for?",
    "options": {
      "A": "Guillain-Barr\u00e9 syndrome",
      "B": "Subacute combined degeneration of the spinal cord",
      "C": "Multiple sclerosis",
      "D": "Peripheral neuropathy from folate deficiency"
    },
    "answer": "B",
    "explanation": "B12 deficiency causes subacute combined degeneration (SCD): demyelination of posterior columns (loss of vibration/proprioception) and lateral corticospinal tracts (spastic weakness, Babinski sign). Neurological damage can occur without anemia (especially if folate supplementation is masking hematologic signs). Treat immediately with IM hydroxocobalamin."
  },
  {
    "id": 195,
    "chapter": 23,
    "domain": "Hematology",
    "question": "A 68-year-old man develops DVT 10 days after hip replacement. He is started on rivaroxaban. After 3 months of treatment, his DVT is provoked (post-surgical) with no other risk factors. What is the recommended duration of anticoagulation?",
    "options": {
      "A": "3 months",
      "B": "6 months",
      "C": "12 months",
      "D": "Indefinitely"
    },
    "answer": "A",
    "explanation": "Provoked VTE (clearly identifiable transient risk factor: surgery, hospitalization, estrogen, fracture): 3 months of anticoagulation is sufficient. Unprovoked DVT/PE: minimum 3 months, then reassess risk-benefit for extended therapy. Recurrent VTE, antiphospholipid syndrome, or active cancer: indefinite anticoagulation."
  },
  {
    "id": 196,
    "chapter": 23,
    "domain": "Hematology",
    "question": "A 45-year-old woman has a PE with RV strain on echo, troponin 0.8 ng/mL, and BP 96/60 mmHg. She is tachycardic at 118 bpm. The diagnosis is submassive PE. What treatment is most appropriate?",
    "options": {
      "A": "Full-dose systemic thrombolytics",
      "B": "Anticoagulation + monitoring; consider catheter-directed thrombolysis if deteriorating",
      "C": "Surgical embolectomy",
      "D": "IVC filter placement alone"
    },
    "answer": "B",
    "explanation": "Submassive (intermediate-risk) PE: hemodynamic stability + RV dysfunction and/or troponin elevation. Standard treatment: anticoagulation (IV heparin or DOAC). Systemic thrombolytics reserved for massive PE (hemodynamic collapse). Catheter-directed thrombolysis (CDT) or systemic lysis considered if clinical deterioration occurs."
  },
  {
    "id": 197,
    "chapter": 23,
    "domain": "Hematology",
    "question": "A patient on warfarin for AF is found to have INR 8.2 without bleeding. Which is the most appropriate management?",
    "options": {
      "A": "Hold warfarin; if INR >10 or bleeding risk high, give vitamin K 2.5\u20135 mg PO",
      "B": "Administer 4-factor PCC immediately",
      "C": "Give fresh frozen plasma immediately",
      "D": "Continue current dose and recheck in 1 week"
    },
    "answer": "A",
    "explanation": "Supratherapeutic INR without bleeding: hold warfarin. For INR >4\u201310 without bleeding, oral vitamin K 1\u20132.5 mg (or 2.5\u20135 mg if >10) accelerates INR correction. For major bleeding or urgent surgery: 4-factor PCC (fastest reversal, normalizes INR within 30 min) + IV vitamin K 10 mg. FFP is second-line (volume load, slow reversal)."
  },
  {
    "id": 198,
    "chapter": 23,
    "domain": "Hematology",
    "question": "A 32-year-old pregnant woman develops thrombocytopenia at 34 weeks. Platelet count is 62,000. She has hypertension (162/104), proteinuria, elevated LFTs, and LDH. The diagnosis is:",
    "options": {
      "A": "ITP",
      "B": "TTP-HUS",
      "C": "HELLP syndrome",
      "D": "Gestational thrombocytopenia"
    },
    "answer": "C",
    "explanation": "HELLP syndrome (Hemolysis, Elevated Liver enzymes, Low Platelets): a severe variant of preeclampsia. Presents with HTN, proteinuria, hepatic involvement (RUQ pain, elevated LFTs), and MAHA. Treatment: delivery (definitive). Steroids for lung maturity if <34 weeks. HELLP can progress to DIC and liver rupture."
  },
  {
    "id": 199,
    "chapter": 23,
    "domain": "Hematology",
    "question": "Heparin-induced thrombocytopenia (HIT) is caused by:",
    "options": {
      "A": "Direct platelet toxicity from unfractionated heparin",
      "B": "IgG antibodies against heparin-PF4 complexes activating platelets and causing thrombosis",
      "C": "Heparin reducing thrombopoietin production",
      "D": "Complement-mediated platelet destruction"
    },
    "answer": "B",
    "explanation": "HIT Type II: IgG antibodies form against heparin-platelet factor 4 (PF4) complexes. Paradoxically, these antibodies ACTIVATE platelets \u2192 thrombocytopenia + venous and arterial THROMBOSIS (not bleeding). Platelet drop >50% or <150,000 occurring 5\u201314 days after heparin \u2192 suspect HIT. Stop ALL heparin (including LMWH flushes); start non-heparin anticoagulant (argatroban, fondaparinux, bivalirudin)."
  },
  {
    "id": 200,
    "chapter": 23,
    "domain": "Hematology",
    "question": "A 35-year-old woman has recurrent pregnancy losses (3 first-trimester miscarriages) and a DVT at age 28. Lupus anticoagulant, anti-cardiolipin IgG, and anti-\u03b22 glycoprotein I antibodies are all positive on two occasions 12 weeks apart. The diagnosis is:",
    "options": {
      "A": "SLE",
      "B": "Factor V Leiden thrombophilia",
      "C": "Antiphospholipid antibody syndrome (APS)",
      "D": "Protein C deficiency"
    },
    "answer": "C",
    "explanation": "APS (Sapporo criteria): \u22651 clinical criterion (vascular thrombosis or pregnancy morbidity) + \u22651 laboratory criterion (lupus anticoagulant, anti-cardiolipin IgG/IgM \u226540 GPL/MPL, anti-\u03b22GPI IgG/IgM) on \u22652 occasions, 12 weeks apart. Treatment: indefinite anticoagulation (warfarin preferred over DOACs per TRAPS trial)."
  },
  {
    "id": 201,
    "chapter": 23,
    "domain": "Hematology",
    "question": "A patient develops TTP (thrombotic thrombocytopenic purpura). Labs show severe thrombocytopenia, microangiopathic hemolytic anemia, and ADAMTS13 activity <10%. Which treatment is most critical?",
    "options": {
      "A": "Platelet transfusion",
      "B": "Plasma exchange (plasmapheresis)",
      "C": "High-dose corticosteroids alone",
      "D": "Rituximab as first-line"
    },
    "answer": "B",
    "explanation": "TTP treatment: URGENT plasma exchange (removes ADAMTS13 inhibitor antibodies and replaces normal ADAMTS13). Platelet transfusion is CONTRAINDICATED (fuels thrombosis by providing substrate for platelet-rich microthrombi). Caplacizumab (anti-vWF nanobody) is now added to plasma exchange. Mortality was >90% before plasma exchange; now <10%."
  },
  {
    "id": 202,
    "chapter": 23,
    "domain": "Hematology",
    "question": "A 25-year-old man has easy bruising, epistaxis since childhood, and a family history of bleeding. PTT is prolonged, PT is normal, platelet count is normal. Factor VIII activity is 3%. The diagnosis is:",
    "options": {
      "A": "Hemophilia A",
      "B": "von Willebrand disease",
      "C": "Hemophilia B",
      "D": "Factor VII deficiency"
    },
    "answer": "A",
    "explanation": "Hemophilia A: X-linked recessive, factor VIII deficiency. Prolonged PTT, normal PT (intrinsic pathway defect). Severity: mild (>5%), moderate (1\u20135%), severe (<1%). Treatment: factor VIII concentrate (recombinant). Emicizumab (bispecific antibody mimicking FVIIIa) for prophylaxis in severe hemophilia A, including those with inhibitors."
  },
  {
    "id": 203,
    "chapter": 23,
    "domain": "Hematology",
    "question": "Which of the following differentiates von Willebrand disease type 1 from hemophilia A on laboratory testing?",
    "options": {
      "A": "Both have normal platelet count and prolonged PTT only",
      "B": "vWD type 1 has prolonged bleeding time/PFA-100 and low vWF antigen; hemophilia A has normal vWF",
      "C": "Hemophilia A has low factor IX; vWD has low factor VIII",
      "D": "vWD type 1 affects only women; hemophilia A affects only men"
    },
    "answer": "B",
    "explanation": "vWD type 1 (most common): low vWF antigen + low vWF activity (ristocetin cofactor) + prolonged PFA-100 + \u00b1 prolonged PTT (if FVIII secondarily low). Hemophilia A: normal vWF, isolated low FVIII. Desmopressin (DDAVP) releases vWF from endothelium and is effective in vWD type 1 and mild hemophilia A."
  },
  {
    "id": 204,
    "chapter": 23,
    "domain": "Hematology",
    "question": "Which laboratory test is the most specific for DIC (disseminated intravascular coagulation)?",
    "options": {
      "A": "Elevated fibrinogen",
      "B": "Elevated D-dimer with prolonged PT, PTT, and low platelets and low fibrinogen",
      "C": "Thrombocytopenia alone",
      "D": "Elevated PT only"
    },
    "answer": "B",
    "explanation": "DIC: simultaneous thrombosis and hemorrhage from systemic coagulation activation. Labs: \u2191PT/PTT, \u2193platelets, \u2193fibrinogen (consumed), \u2191D-dimer (fibrin degradation products), schistocytes on smear. D-dimer alone is non-specific. Causes: sepsis (#1), malignancy, obstetric complications (ABRUPTIO), trauma, transfusion reactions."
  },
  {
    "id": 205,
    "chapter": 24,
    "domain": "Oncology",
    "question": "A 62-year-old woman has a breast mass. Core biopsy shows invasive ductal carcinoma, ER+/PR+/HER2-negative (luminal A subtype). Which additional molecular test guides systemic therapy decisions in node-negative, hormone receptor-positive early breast cancer?",
    "options": {
      "A": "BRCA1/2 mutation testing",
      "B": "21-gene recurrence score (Oncotype DX)",
      "C": "Ki-67 proliferation index alone",
      "D": "PD-L1 expression"
    },
    "answer": "B",
    "explanation": "Oncotype DX (21-gene recurrence score): validated in ER+/HER2-, node-negative or 1\u20133 node-positive early breast cancer. Recurrence score 0\u201325 (low/intermediate) \u2192 hormone therapy alone; \u226526 \u2192 benefit from adding chemotherapy. TAILORx and RxPONDER trials defined these thresholds."
  },
  {
    "id": 206,
    "chapter": 24,
    "domain": "Oncology",
    "question": "A 58-year-old man with no prior cancer history has a PSA of 8.2 ng/mL and a palpable nodule on DRE. Prostate biopsy shows Gleason score 7 (4+3) adenocarcinoma, stage T2b. Which treatment option offers the best chance of cure?",
    "options": {
      "A": "Androgen deprivation therapy (ADT) alone",
      "B": "Radical prostatectomy or external beam radiation therapy",
      "C": "Watchful waiting",
      "D": "Sipuleucel-T immunotherapy"
    },
    "answer": "B",
    "explanation": "Intermediate-risk localized prostate cancer (Gleason 7, PSA 8, T2b): radical prostatectomy or radiation therapy (EBRT \u00b1 brachytherapy) are both curative options with similar outcomes. ADT alone is not curative for localized disease. Active surveillance may be appropriate only for low-risk (Gleason \u22646) disease."
  },
  {
    "id": 207,
    "chapter": 24,
    "domain": "Oncology",
    "question": "A 55-year-old woman with advanced HER2-positive breast cancer progresses on trastuzumab and pertuzumab. Which targeted agent combines a cytotoxic and HER2-targeting component?",
    "options": {
      "A": "Lapatinib",
      "B": "T-DM1 (ado-trastuzumab emtansine) or T-DXd (trastuzumab deruxtecan)",
      "C": "Everolimus",
      "D": "CDK4/6 inhibitor (palbociclib)"
    },
    "answer": "B",
    "explanation": "Antibody-drug conjugates (ADCs) for HER2+ breast cancer: T-DM1 (trastuzumab + emtansine) and T-DXd (trastuzumab deruxtecan) deliver cytotoxic agents directly to HER2-expressing tumor cells. T-DXd (DESTINY-Breast04) demonstrated benefit even in HER2-low breast cancer."
  },
  {
    "id": 208,
    "chapter": 24,
    "domain": "Oncology",
    "question": "A 70-year-old man with metastatic non-small cell lung cancer (adenocarcinoma) has PD-L1 expression of 75% and no EGFR/ALK/ROS1 mutations. Which first-line treatment has the highest evidence for benefit?",
    "options": {
      "A": "Chemotherapy doublet (cisplatin + gemcitabine)",
      "B": "Pembrolizumab monotherapy (anti-PD-1)",
      "C": "Erlotinib (EGFR inhibitor)",
      "D": "Bevacizumab + chemotherapy"
    },
    "answer": "B",
    "explanation": "KEYNOTE-024: pembrolizumab monotherapy significantly improved PFS and OS vs. chemotherapy in metastatic NSCLC with PD-L1 \u226550% (TPS) and no targetable mutations. For PD-L1 1\u201349%, pembrolizumab + chemotherapy is preferred. Erlotinib is for EGFR-mutated NSCLC only."
  },
  {
    "id": 209,
    "chapter": 24,
    "domain": "Oncology",
    "question": "Febrile neutropenia is defined as fever \u226538.3\u00b0C (or >38\u00b0C for >1 hour) with ANC below:",
    "options": {
      "A": "1,500/\u03bcL",
      "B": "1,000/\u03bcL",
      "C": "500/\u03bcL",
      "D": "100/\u03bcL"
    },
    "answer": "C",
    "explanation": "Febrile neutropenia: temperature \u226538.3\u00b0C (single) or >38\u00b0C sustained \u22651 hour + ANC <500/\u03bcL or <1,000/\u03bcL expected to fall to <500/\u03bcL. Risk stratification (MASCC score): low-risk \u2192 oral ciprofloxacin + amoxicillin-clavulanate. High-risk (MASCC <21) \u2192 hospitalization + IV antipseudomonal antibiotics (piperacillin-tazobactam, cefepime)."
  },
  {
    "id": 210,
    "chapter": 24,
    "domain": "Oncology",
    "question": "A patient with CML (chronic myeloid leukemia) has the Philadelphia chromosome (BCR-ABL fusion t(9;22)). Which class of targeted therapy has transformed CML from a fatal disease to one with near-normal life expectancy?",
    "options": {
      "A": "Monoclonal antibodies (rituximab)",
      "B": "BCR-ABL tyrosine kinase inhibitors (imatinib, dasatinib, nilotinib)",
      "C": "CHOP chemotherapy regimen",
      "D": "Interferon-alpha"
    },
    "answer": "B",
    "explanation": "BCR-ABL tyrosine kinase inhibitors (TKIs): imatinib (first generation, IRIS trial), dasatinib/nilotinib (second generation), ponatinib (third generation for T315I mutation). TKIs achieve complete cytogenetic response in >80% and molecular remission in many patients. Long-term treatment-free remission is possible in some patients."
  },
  {
    "id": 211,
    "chapter": 24,
    "domain": "Oncology",
    "question": "Tumor lysis syndrome most commonly occurs in which malignancy setting and is characterized by:",
    "options": {
      "A": "Solid tumors after surgery; hypocalcemia, hyperuricemia, hyperphosphatemia",
      "B": "High-grade hematological malignancies (Burkitt lymphoma, ALL) after chemotherapy; hyperkalemia, hyperuricemia, hyperphosphatemia, hypocalcemia, AKI",
      "C": "Multiple myeloma after radiation; hypercalcemia and hypokalemia",
      "D": "CLL after rituximab; disseminated intravascular coagulation"
    },
    "answer": "B",
    "explanation": "TLS: massive tumor cell lysis after cytotoxic therapy \u2192 release of intracellular contents. High-risk: Burkitt lymphoma, ALL, bulky DLBCL. Labs: hyperkalemia, hyperphosphatemia, hyperuricemia (urate crystals \u2192 AKI), hypocalcemia (calcium-phosphate precipitation). Prevention: aggressive IV hydration, allopurinol or rasburicase."
  },
  {
    "id": 212,
    "chapter": 24,
    "domain": "Oncology",
    "question": "A patient with multiple myeloma has a serum protein electrophoresis showing an M-spike, elevated kappa free light chains, anemia, hypercalcemia, lytic bone lesions, and creatinine 2.4 mg/dL (CRAB criteria). Which treatment backbone is standard induction for transplant-eligible patients?",
    "options": {
      "A": "Melphalan + prednisone",
      "B": "Lenalidomide + bortezomib + dexamethasone (RVd)",
      "C": "CHOP chemotherapy",
      "D": "Bendamustine + rituximab"
    },
    "answer": "B",
    "explanation": "Multiple myeloma standard induction for transplant-eligible patients: bortezomib (proteasome inhibitor) + lenalidomide (IMiD) + dexamethasone (RVd) or carfilzomib-based regimens. This is followed by autologous stem cell transplant as consolidation, then lenalidomide maintenance. Melphalan-prednisone is for non-transplant-eligible elderly patients."
  },
  {
    "id": 213,
    "chapter": 25,
    "domain": "Neurology",
    "question": "A 72-year-old man develops sudden onset left-sided weakness, facial droop, and slurred speech at 8:00 AM, first noticed by his wife when he woke up. At the ER (10:30 AM), NIHSS is 12. CT head is negative for hemorrhage. What is the appropriate management?",
    "options": {
      "A": "IV tPA should not be given as time of onset is unknown (wake-up stroke)",
      "B": "IV tPA can be administered if MRI DWI/FLAIR mismatch confirms acute stroke within window, or per 4.5-hour rule from last known well",
      "C": "Mechanical thrombectomy only, no tPA",
      "D": "Aspirin 325 mg and admit for monitoring"
    },
    "answer": "B",
    "explanation": "Wake-up stroke: DAWN/DEFUSE-3 trials showed benefit of thrombectomy up to 24 hours if penumbra exists on perfusion imaging. For IV tPA in wake-up stroke: WAKE-UP trial showed benefit using MRI DWI/FLAIR mismatch (DWI positive, FLAIR negative = <4.5 hours physiologically). Treatment decision is time-sensitive regardless of clock time."
  },
  {
    "id": 214,
    "chapter": 25,
    "domain": "Neurology",
    "question": "A 65-year-old woman with atrial fibrillation on warfarin (INR 2.4) presents with sudden onset right-sided weakness. CT shows a large left MCA territory infarct with hemorrhagic transformation. The INR is 2.4. She is NOT a candidate for:",
    "options": {
      "A": "Supportive care",
      "B": "IV tPA (contraindicated with anticoagulation at therapeutic levels)",
      "C": "Blood pressure management",
      "D": "DVT prophylaxis after 24\u201348 hours"
    },
    "answer": "B",
    "explanation": "IV tPA contraindications include: current anticoagulation with therapeutic INR (>1.7), LMWH within 24 hours, dabigatran use (unless DTI activity is low). An INR of 2.4 is therapeutic \u2014 IV tPA is contraindicated. Thrombectomy may still be considered if large vessel occlusion is present."
  },
  {
    "id": 215,
    "chapter": 25,
    "domain": "Neurology",
    "question": "Which stroke syndrome presents with ipsilateral Horner syndrome, ipsilateral facial sensory loss, contralateral body sensory loss, dysphagia, dysarthria, and ipsilateral limb ataxia?",
    "options": {
      "A": "PICA territory (lateral medullary/Wallenberg syndrome)",
      "B": "AICA territory syndrome",
      "C": "Anterior cerebral artery syndrome",
      "D": "MCA superior division stroke"
    },
    "answer": "A",
    "explanation": "Lateral medullary (Wallenberg) syndrome: PICA or vertebral artery occlusion. Classic: ipsilateral Horner (hypothalamic sympathetics), ipsilateral face pain/temp loss (V descending), contralateral body pain/temp loss (spinothalamic), dysphagia/dysarthria (nucleus ambiguus CN IX/X), ipsilateral ataxia (cerebellum/spinocerebellar tracts)."
  },
  {
    "id": 216,
    "chapter": 25,
    "domain": "Neurology",
    "question": "A 58-year-old man has a TIA with sudden onset dysarthria and right hand weakness lasting 20 minutes. His ABCD2 score is 6. What is the appropriate management?",
    "options": {
      "A": "Discharge home with follow-up neurology in 2 weeks",
      "B": "Urgent dual antiplatelet therapy (aspirin + clopidogrel for 21 days), MRI, carotid imaging, and cardiac monitoring within 24 hours",
      "C": "Start warfarin empirically for suspected AF",
      "D": "Aspirin only and repeat MRI in 30 days"
    },
    "answer": "B",
    "explanation": "High-risk TIA (ABCD2 \u22654): 2-day stroke risk ~4\u20138%. POINT/CHANCE trials: dual antiplatelet therapy (aspirin + clopidogrel) for 21 days then clopidogrel alone reduces early stroke risk by ~25%. Urgent workup: MRI DWI, CTA/MRA head-neck (carotid stenosis?), ECG, prolonged cardiac monitoring (AF detection)."
  },
  {
    "id": 217,
    "chapter": 25,
    "domain": "Neurology",
    "question": "A 45-year-old woman develops a sudden thunderclap headache ('worst headache of my life') while at rest. CT head is normal. What is the appropriate next step?",
    "options": {
      "A": "Discharge with analgesics and reassurance",
      "B": "MRI brain within 24 hours",
      "C": "Lumbar puncture to evaluate for xanthochromia",
      "D": "CT angiography and lumbar puncture for subarachnoid hemorrhage workup"
    },
    "answer": "D",
    "explanation": "Thunderclap headache with normal CT: SAH sensitivity of CT is 93\u201398% in first 6 hours, decreasing thereafter. LP for xanthochromia (bilirubin from RBC breakdown, appears 2\u20134 hours after SAH, sensitive >12 hours post-onset). CT angiography evaluates for aneurysm. CT alone negative does NOT rule out SAH."
  },
  {
    "id": 218,
    "chapter": 25,
    "domain": "Neurology",
    "question": "A 70-year-old man with atrial fibrillation has a large ischemic stroke. On day 14, CT shows a 3 cm hemorrhagic transformation. He needs anticoagulation for AF. When should anticoagulation be restarted?",
    "options": {
      "A": "Immediately \u2014 the risk of cardioembolism outweighs hemorrhagic risk",
      "B": "After 4\u20136 weeks if hemorrhagic transformation is stable, based on stroke size and hemorrhage extent",
      "C": "Never \u2014 all post-stroke AF patients should switch to aspirin",
      "D": "After 7 days regardless of stroke size"
    },
    "answer": "B",
    "explanation": "Timing of anticoagulation resumption after cardioembolic stroke with hemorrhagic transformation: '1\u20133\u20136\u201312' rule as a guide. Large strokes with significant hemorrhagic transformation: delay 4\u20136 weeks. Small non-hemorrhagic strokes (minor/TIA): restart within days to 2 weeks. Balance recurrence risk vs. hemorrhagic risk."
  },
  {
    "id": 219,
    "chapter": 25,
    "domain": "Neurology",
    "question": "Which of the following is the primary mechanism of atherosclerotic ischemic stroke in large vessel disease?",
    "options": {
      "A": "Artery-to-artery embolism from ruptured atherosclerotic plaque",
      "B": "Cardioembolism from atrial fibrillation",
      "C": "Lacunar infarction from hypertensive small vessel disease",
      "D": "Cerebral venous thrombosis"
    },
    "answer": "A",
    "explanation": "Large artery atherosclerosis: plaque rupture in ICA, MCA, or basilar artery \u2192 thrombus \u2192 artery-to-artery embolism (most common mechanism) or local occlusion. Carotid stenosis >70% \u2192 high stroke risk (NASCET trial). Cardioembolism (AF) is the most common cause of cardioembolic stroke. Lacunar: hypertensive lipohyalinosis of small vessels."
  },
  {
    "id": 220,
    "chapter": 25,
    "domain": "Neurology",
    "question": "A patient with ischemic stroke due to 85% internal carotid artery stenosis is medically stable. Which intervention reduces 2-year stroke risk from ~26% to ~9%?",
    "options": {
      "A": "Carotid endarterectomy (CEA) within 2 weeks of the index event",
      "B": "Aspirin + statin indefinitely without revascularization",
      "C": "Carotid artery stenting (CAS) in all patients",
      "D": "Warfarin anticoagulation"
    },
    "answer": "A",
    "explanation": "NASCET trial: carotid endarterectomy (CEA) reduces 2-year ipsilateral stroke risk from ~26% to ~9% in symptomatic 70\u201399% ICA stenosis. CEA should be performed within 2 weeks of the index TIA/stroke to maximize benefit. Carotid artery stenting (CAS) is equivalent to CEA in average-risk patients (CREST trial)."
  },
  {
    "id": 221,
    "chapter": 25,
    "domain": "Neurology",
    "question": "CT of the head shows a hyperdense collection in the right sylvian fissure consistent with subarachnoid hemorrhage. CTA confirms a 7 mm right MCA aneurysm. Which complication of SAH must be aggressively prevented in the first 14 days?",
    "options": {
      "A": "Cerebral salt wasting",
      "B": "Vasospasm (delayed cerebral ischemia)",
      "C": "Hydrocephalus",
      "D": "Rebleeding"
    },
    "answer": "B",
    "explanation": "Vasospasm (delayed cerebral ischemia) peaks 4\u201314 days after SAH and is the leading cause of morbidity and mortality. Prevention: nimodipine 60 mg PO q4h \u00d7 21 days (reduces vasospasm-related neurological deficits). Triple-H therapy (hypertension, hypervolemia, hemodilution) for symptomatic vasospasm. Transcranial Doppler monitors vasospasm."
  },
  {
    "id": 222,
    "chapter": 26,
    "domain": "Neurology",
    "question": "A 68-year-old man has a 2-year history of resting tremor in his right hand that improves with intentional movement, bradykinesia, and cogwheel rigidity. The diagnosis is Parkinson's disease. What is the most effective medication for motor symptom control?",
    "options": {
      "A": "Dopamine agonist (ropinirole) as first-line for all patients",
      "B": "Levodopa/carbidopa (most effective motor therapy)",
      "C": "MAO-B inhibitor (selegiline) only",
      "D": "Anticholinergic (benztropine)"
    },
    "answer": "B",
    "explanation": "Levodopa/carbidopa is the most effective motor therapy in Parkinson's disease. Carbidopa prevents peripheral decarboxylation of levodopa, reducing side effects. Motor complications (wearing-off, dyskinesias) develop over years. Young patients (<65) may start with dopamine agonists or MAO-B inhibitors to delay motor complications; older patients benefit from early levodopa."
  },
  {
    "id": 223,
    "chapter": 26,
    "domain": "Neurology",
    "question": "A 35-year-old woman has episodes of bilateral lower extremity weakness that resolve over days, followed by an episode of monocular blindness 6 months later. MRI shows multiple demyelinating lesions in the periventricular white matter. CSF shows oligoclonal bands. The most likely diagnosis is:",
    "options": {
      "A": "Neuromyelitis optica spectrum disorder (NMOSD)",
      "B": "Multiple sclerosis (relapsing-remitting)",
      "C": "CNS vasculitis",
      "D": "Neurosarcoidosis"
    },
    "answer": "B",
    "explanation": "RRMS: relapsing-remitting course, demyelinating lesions disseminated in time and space (McDonald criteria), periventricular white matter lesions, oligoclonal bands in CSF. NMOSD: AQP4 antibody-positive, predominantly attacks optic nerves and spinal cord (area postrema, long spinal cord lesions). Treatment: high-dose IV methylprednisolone for acute attacks; DMTs for prevention."
  },
  {
    "id": 224,
    "chapter": 26,
    "domain": "Neurology",
    "question": "A 75-year-old woman with dementia is brought in with acute agitation, fever, and altered mental status. Urinalysis shows bacteriuria. Her family reports she developed these symptoms suddenly. The most appropriate management is:",
    "options": {
      "A": "Treat the UTI, recognizing this is a superimposed delirium rather than a new dementia diagnosis",
      "B": "Attribute all symptoms to dementia progression without further workup",
      "C": "Order CT scan for dementia staging",
      "D": "Start antipsychotic medication as primary treatment"
    },
    "answer": "A",
    "explanation": "Acute onset confusion in an elderly patient with dementia is delirium until proven otherwise \u2014 not dementia progression. Delirium is triggered by underlying medical illness (infection, metabolic, medications, etc.). Treat the precipitating cause. Antipsychotics are second-line for dangerous agitation, not first-line for delirium management."
  },
  {
    "id": 225,
    "chapter": 26,
    "domain": "Neurology",
    "question": "A 45-year-old woman has a generalized tonic-clonic seizure while driving. She has no prior history of epilepsy. MRI and EEG are normal. She was sleep-deprived the night before. What is the most appropriate management?",
    "options": {
      "A": "Start long-term antiepileptic drug therapy immediately",
      "B": "No antiepileptic needed \u2014 counsel on sleep hygiene, restrict driving per state law, and recheck in 3\u20136 months",
      "C": "Admit for 48-hour EEG monitoring",
      "D": "Levetiracetam for at least 2 years"
    },
    "answer": "B",
    "explanation": "First unprovoked seizure in a low-risk patient (normal MRI, normal EEG, identifiable provocation like sleep deprivation): antiepileptic therapy is not mandatory. Seizure recurrence risk is 40\u201350% without treatment. Driving restriction applies per state law (typically 3\u20136 months seizure-free). Second unprovoked seizure (or high-risk first seizure) \u2192 antiepileptic initiation."
  },
  {
    "id": 226,
    "chapter": 26,
    "domain": "Neurology",
    "question": "Status epilepticus is defined as seizure activity lasting longer than:",
    "options": {
      "A": "2 minutes",
      "B": "5 minutes (or recurrent seizures without recovery)",
      "C": "10 minutes",
      "D": "30 minutes"
    },
    "answer": "B",
    "explanation": "Status epilepticus: seizure activity >5 minutes without return to baseline, or \u22652 seizures without recovery between. Operational definition at 5 minutes (Neurocritical Care Society 2012) \u2014 the point at which seizures are unlikely to self-terminate and brain injury risk increases. Treatment: benzodiazepines first (lorazepam, diazepam), then levetiracetam/phenytoin, then general anesthesia."
  },
  {
    "id": 227,
    "chapter": 26,
    "domain": "Neurology",
    "question": "A 60-year-old man with type 2 diabetes has a 6-month history of symmetric burning and tingling in his feet, worse at night. Nerve conduction studies show reduced sensory nerve action potentials with preserved motor function. The diagnosis is:",
    "options": {
      "A": "Tarsal tunnel syndrome",
      "B": "Lumbar radiculopathy",
      "C": "Distal symmetric peripheral neuropathy (length-dependent)",
      "D": "Amyotrophic lateral sclerosis"
    },
    "answer": "C",
    "explanation": "Distal symmetric polyneuropathy: most common neuropathy in DM. Length-dependent (longest axons affected first \u2192 feet first, 'stocking-glove' distribution), predominantly sensory initially. NCS shows reduced SNAP amplitudes (axonal neuropathy). Treatment: tight glycemic control, gabapentin/pregabalin/duloxetine for neuropathic pain."
  },
  {
    "id": 228,
    "chapter": 26,
    "domain": "Neurology",
    "question": "A 30-year-old man develops progressive ascending weakness over 10 days starting in his legs, areflexia, and mild sensory symptoms. He had gastroenteritis 3 weeks ago. CSF shows protein 125 mg/dL with normal cell count (albumino-cytological dissociation). The diagnosis is:",
    "options": {
      "A": "Multiple sclerosis",
      "B": "Guillain-Barr\u00e9 syndrome (AIDP)",
      "C": "Myasthenia gravis",
      "D": "Botulism"
    },
    "answer": "B",
    "explanation": "GBS (AIDP): post-infectious demyelinating polyneuropathy (Campylobacter, CMV, EBV, Zika). Ascending weakness + areflexia + mild sensory symptoms + CSF albuminocytological dissociation (high protein, <10 cells). Treatment: IVIG or plasma exchange (equivalent). Supportive care. Respiratory monitoring essential \u2014 intubate if FVC <20 mL/kg."
  },
  {
    "id": 229,
    "chapter": 26,
    "domain": "Neurology",
    "question": "A 55-year-old woman has fatigable ptosis, diplopia, and proximal limb weakness that worsen with repetitive use. Acetylcholine receptor antibodies are positive. The diagnosis is:",
    "options": {
      "A": "Lambert-Eaton myasthenic syndrome",
      "B": "Myasthenia gravis",
      "C": "Botulism",
      "D": "Ocular myopathy"
    },
    "answer": "B",
    "explanation": "Myasthenia gravis: autoimmune attack on ACh receptors at NMJ \u2192 fatigable weakness (worse with exercise, better with rest). AChR antibodies in 85%. Edrophonium (Tensilon) test: transient improvement with IV acetylcholinesterase inhibitor. Treatment: pyridostigmine (AChE inhibitor), thymectomy (if thymic hyperplasia), immunosuppression, IVIG/plasmapheresis for crises."
  },
  {
    "id": 230,
    "chapter": 27,
    "domain": "Infectious Disease",
    "question": "A 28-year-old man presents with 5 days of fever, severe headache, photophobia, and neck stiffness. CSF shows glucose 32 mg/dL (serum 95), protein 240 mg/dL, WBC 1,200/\u03bcL (85% PMN). Gram stain shows gram-positive lancet-shaped diplococci. What is the appropriate treatment?",
    "options": {
      "A": "IV ceftriaxone + dexamethasone",
      "B": "IV vancomycin + acyclovir",
      "C": "IV ceftriaxone alone",
      "D": "IV ampicillin + gentamicin"
    },
    "answer": "A",
    "explanation": "Bacterial meningitis (S. pneumoniae \u2014 gram-positive diplococci): IV ceftriaxone (covers S. pneumoniae and N. meningitidis) + dexamethasone 0.15 mg/kg q6h \u00d7 4 days (STARTED BEFORE or WITH first antibiotic dose reduces mortality and neurological sequelae in pneumococcal meningitis). Add vancomycin if penicillin-resistant S. pneumoniae suspected."
  },
  {
    "id": 231,
    "chapter": 27,
    "domain": "Infectious Disease",
    "question": "A 35-year-old woman from Southeast Asia presents with 3 weeks of low-grade fever, night sweats, and a pulmonary upper lobe infiltrate with a 3 cm cavitation. AFB smear is positive. What is the standard isolation precaution in the hospital?",
    "options": {
      "A": "Contact precautions",
      "B": "Droplet precautions",
      "C": "Airborne precautions (negative pressure room + N95 respirator)",
      "D": "Standard precautions only"
    },
    "answer": "C",
    "explanation": "Active pulmonary tuberculosis requires airborne isolation: negative pressure room with \u226512 air changes/hour, and N95 respirators for healthcare workers. Infectious TB particles (droplet nuclei <5 \u03bcm) remain airborne for hours. Maintain isolation until 3 AFB smears are negative on 3 consecutive days, or patient shows clinical improvement on treatment."
  },
  {
    "id": 232,
    "chapter": 27,
    "domain": "Infectious Disease",
    "question": "A 45-year-old man is bitten by a dog in a rural area. The dog is healthy and available for observation. The wound is washed and he presents 4 hours after the bite. His tetanus is up to date. What is the appropriate rabies prophylaxis?",
    "options": {
      "A": "No prophylaxis needed \u2014 observe the dog for 10 days",
      "B": "Immediate post-exposure prophylaxis with HRIG + vaccine",
      "C": "Rabies immune globulin only",
      "D": "Rabies vaccine alone starting today"
    },
    "answer": "A",
    "explanation": "Dog/cat bites: if the animal is healthy and available for 10-day observation, defer PEP unless the animal develops signs of rabies. If animal unavailable, behaving abnormally, or is a bat/raccoon/skunk/fox \u2192 immediate PEP: HRIG (20 IU/kg) infiltrated into wound on day 0, plus rabies vaccine on days 0, 3, 7, 14."
  },
  {
    "id": 233,
    "chapter": 27,
    "domain": "Infectious Disease",
    "question": "A 62-year-old woman with diabetes develops right leg erythema, warmth, and swelling without lymphangitis. She is afebrile. CRP is mildly elevated. The most likely causative organisms are:",
    "options": {
      "A": "S. aureus and S. pyogenes",
      "B": "P. aeruginosa and E. coli",
      "C": "H. influenzae and S. pneumoniae",
      "D": "Bacteroides fragilis and Fusobacterium"
    },
    "answer": "A",
    "explanation": "Non-purulent cellulitis is predominantly caused by beta-hemolytic streptococci (Group A, B, C, G) and S. aureus. Treatment: cephalexin or dicloxacillin (outpatient) or IV cefazolin (inpatient). Mark the border of erythema to monitor progression. In MRSA risk or purulent cellulitis: TMP-SMX or doxycycline."
  },
  {
    "id": 234,
    "chapter": 27,
    "domain": "Infectious Disease",
    "question": "A 25-year-old sexually active woman presents with cervical discharge, pelvic pain, cervical motion tenderness, and adnexal tenderness. The diagnosis is:",
    "options": {
      "A": "Acute appendicitis",
      "B": "Pelvic inflammatory disease (PID)",
      "C": "Ectopic pregnancy",
      "D": "Ovarian torsion"
    },
    "answer": "B",
    "explanation": "PID minimum criteria: cervical motion tenderness + uterine tenderness + adnexal tenderness in a sexually active woman. Caused by N. gonorrhoeae, C. trachomatis, and polymicrobial vaginal flora. Outpatient treatment: ceftriaxone 500 mg IM \u00d7 1 + doxycycline 100 mg BID \u00d7 14 days \u00b1 metronidazole. Hospitalize if tubo-ovarian abscess, pregnancy, or clinical failure."
  },
  {
    "id": 235,
    "chapter": 27,
    "domain": "Infectious Disease",
    "question": "A patient has Clostridium difficile colitis with WBC 24,000, creatinine 2.1, temperature 39.2\u00b0C, and abdominal distension. He has had a prior C. diff episode 2 months ago. This is classified as:",
    "options": {
      "A": "Non-severe C. difficile \u2014 oral vancomycin 125 mg QID \u00d7 10 days",
      "B": "Severe C. difficile \u2014 oral vancomycin 125 mg QID \u00d7 10 days",
      "C": "Fulminant C. difficile \u2014 oral/rectal vancomycin + IV metronidazole",
      "D": "Recurrent C. difficile \u2014 fidaxomicin preferred"
    },
    "answer": "D",
    "explanation": "Per IDSA 2021 guidelines: This is recurrent (second episode) C. difficile. Fidaxomicin is preferred for recurrent CDI (superior to vancomycin in preventing further recurrence). Fecal microbiota transplant (FMT) is highly effective for multiply recurrent CDI. Fulminant CDI: high-dose oral/NG vancomycin + IV metronidazole, consider surgical consult."
  },
  {
    "id": 236,
    "chapter": 27,
    "domain": "Infectious Disease",
    "question": "An elderly patient on broad-spectrum antibiotics develops watery diarrhea with >3 stools/day. C. difficile toxin PCR is positive. White blood cell count is 15,000 with no hypotension. This is classified as:",
    "options": {
      "A": "Mild-moderate C. difficile",
      "B": "Severe C. difficile",
      "C": "Fulminant C. difficile",
      "D": "Asymptomatic colonization"
    },
    "answer": "A",
    "explanation": "IDSA 2021 C. difficile severity: Mild-moderate = WBC \u226415,000, creatinine <1.5 mg/dL. Severe = WBC >15,000 or creatinine \u22651.5 mg/dL. Fulminant = hypotension, ileus, or megacolon. This patient: WBC 15,000, no creatinine elevation = mild-moderate (borderline severe). Treatment: oral vancomycin 125 mg QID \u00d7 10 days (preferred over metronidazole per IDSA)."
  },
  {
    "id": 237,
    "chapter": 27,
    "domain": "Infectious Disease",
    "question": "A 32-year-old traveler returning from Kenya develops fever (103\u00b0F), headache, and chills 10 days after return. CBC shows thrombocytopenia and mild anemia. Thick and thin blood smears show ring-form trophozoites in >5% of RBCs. The diagnosis is:",
    "options": {
      "A": "Plasmodium vivax",
      "B": "Plasmodium falciparum (severe malaria)",
      "C": "Dengue fever",
      "D": "Typhoid fever"
    },
    "answer": "B",
    "explanation": "P. falciparum: responsible for severe/cerebral malaria. Key features: high parasitemia (>5% RBCs), multiple ring forms per cell, banana-shaped gametocytes. Treatment of uncomplicated P. falciparum: artemether-lumefantrine (AL). Severe malaria: IV artesunate (preferred) or IV quinine + doxycycline. Always rule out falciparum \u2014 it can be fatal within 24\u201348 hours."
  },
  {
    "id": 238,
    "chapter": 27,
    "domain": "Infectious Disease",
    "question": "Which antibiotic is the drug of choice for Lyme disease (erythema migrans) in an adult without cardiac or neurological involvement?",
    "options": {
      "A": "Doxycycline 100 mg BID \u00d7 14\u201321 days",
      "B": "IV ceftriaxone \u00d7 21 days",
      "C": "Amoxicillin \u00d7 7 days",
      "D": "Azithromycin 5-day course"
    },
    "answer": "A",
    "explanation": "Early Lyme disease (erythema migrans): doxycycline 100 mg BID \u00d7 14\u201321 days is first-line for adults and children >8 years. Amoxicillin or cefuroxime for children <8 or pregnancy. IV ceftriaxone \u00d7 14\u201321 days is reserved for Lyme carditis (high-degree AV block), Lyme meningitis, or encephalitis. IV therapy for Lyme arthritis that fails oral treatment."
  },
  {
    "id": 239,
    "chapter": 28,
    "domain": "Infectious Disease",
    "question": "A 35-year-old man with HIV has a CD4 count of 85 cells/\u03bcL and viral load of 48,000 copies/mL. He is not on ART. Which opportunistic infection prophylaxis is most urgently needed?",
    "options": {
      "A": "Azithromycin for MAC (CD4 <50 threshold not yet reached)",
      "B": "TMP-SMX for PCP (CD4 <200)",
      "C": "Fluconazole for cryptococcal meningitis",
      "D": "Pyrimethamine-sulfadiazine for Toxoplasma"
    },
    "answer": "B",
    "explanation": "PCP prophylaxis: TMP-SMX 1 DS tablet daily when CD4 <200 cells/\u03bcL (or CD4% <14%). This is the most important prophylaxis. Toxoplasma prophylaxis (TMP-SMX also covers this if Toxoplasma IgG positive + CD4 <100). MAC prophylaxis (azithromycin) when CD4 <50. Cryptococcal antigen screening recommended CD4 <100."
  },
  {
    "id": 240,
    "chapter": 28,
    "domain": "Infectious Disease",
    "question": "A 42-year-old woman with HIV on ART has a CD4 of 45 and develops headache, fever, altered mentation, and nuchal rigidity. CSF India ink stain shows encapsulated yeasts. The diagnosis and treatment are:",
    "options": {
      "A": "Bacterial meningitis \u2014 ceftriaxone",
      "B": "Cryptococcal meningitis \u2014 liposomal amphotericin B + flucytosine \u00d7 2 weeks, then fluconazole",
      "C": "CMV encephalitis \u2014 ganciclovir",
      "D": "CNS toxoplasmosis \u2014 pyrimethamine + sulfadiazine"
    },
    "answer": "B",
    "explanation": "Cryptococcal meningitis: India ink positive, Cryptococcus neoformans CSF antigen positive. Severely immunocompromised HIV patients. Treatment: induction with liposomal amphotericin B + flucytosine \u00d7 2 weeks \u2192 consolidation with fluconazole 400 mg \u00d7 8 weeks \u2192 maintenance with fluconazole 200 mg. ART restart deferred 4\u20136 weeks to prevent IRIS."
  },
  {
    "id": 241,
    "chapter": 28,
    "domain": "Infectious Disease",
    "question": "A patient with HIV has CD4 20 and develops bilateral, painless, whitish patches on the tongue that cannot be scraped off. KOH prep is negative. The diagnosis is:",
    "options": {
      "A": "Oral candidiasis (thrush)",
      "B": "Oral hairy leukoplakia (EBV)",
      "C": "Aphthous ulcers",
      "D": "Kaposi sarcoma"
    },
    "answer": "B",
    "explanation": "Oral hairy leukoplakia: EBV replication in tongue epithelium of severely immunocompromised HIV patients. White corrugated patches on lateral tongue that CANNOT be scraped off (vs. oral candidiasis which CAN be scraped off, revealing erythematous mucosa). OHL is benign, usually requires no treatment \u2014 improves with ART."
  },
  {
    "id": 242,
    "chapter": 28,
    "domain": "Infectious Disease",
    "question": "Current HIV pre-exposure prophylaxis (PrEP) with tenofovir/emtricitabine (TDF/FTC) reduces HIV acquisition by approximately what percentage in high-risk individuals?",
    "options": {
      "A": "30\u201340%",
      "B": "60\u201370%",
      "C": ">90% when taken daily as prescribed",
      "D": "50\u201360%"
    },
    "answer": "C",
    "explanation": "PrEP (TDF/FTC, or the newer TAF/FTC) reduces HIV transmission risk by >90% when taken daily as prescribed (iPrEX trial: 92% reduction; real-world adherent use approaches 99%). Screening prerequisites: HIV-negative test, renal function (baseline creatinine), STI screening. Follow-up every 3 months with HIV test and STI screen."
  },
  {
    "id": 243,
    "chapter": 28,
    "domain": "Infectious Disease",
    "question": "A patient with HIV and a CD4 of 300 is started on ART. Two weeks later, he develops fever, lymphadenopathy, and worsening of previously subclinical MAC infection. The CD4 is now 350. This is best described as:",
    "options": {
      "A": "Drug-induced hypersensitivity reaction",
      "B": "Immune reconstitution inflammatory syndrome (IRIS)",
      "C": "Treatment failure with ART",
      "D": "New opportunistic infection"
    },
    "answer": "B",
    "explanation": "IRIS (immune reconstitution inflammatory syndrome): paradoxical worsening of a pre-existing or newly unmasked infection due to rapid recovery of immune function after ART initiation. Typically occurs 2\u201312 weeks after ART start. Management: treat the underlying opportunistic infection, continue ART; anti-inflammatory therapy (prednisone) for severe cases."
  },
  {
    "id": 244,
    "chapter": 28,
    "domain": "Infectious Disease",
    "question": "Which HIV drug class inhibits integration of viral DNA into the host chromosome and includes drugs like dolutegravir and bictegravir?",
    "options": {
      "A": "NRTIs",
      "B": "NNRTIs",
      "C": "Integrase strand transfer inhibitors (INSTIs)",
      "D": "Protease inhibitors"
    },
    "answer": "C",
    "explanation": "INSTIs (integrase strand transfer inhibitors) block the catalytic activity of integrase, preventing viral DNA integration into the host chromosome. Dolutegravir (DTG) and bictegravir (BIC) are preferred agents in first-line regimens due to high potency, high genetic barrier to resistance, and minimal drug interactions. Preferred first-line ART backbone in most guidelines."
  },
  {
    "id": 245,
    "chapter": 28,
    "domain": "Infectious Disease",
    "question": "A newly diagnosed HIV-positive patient has CD4 450 and viral load 22,000. He has no history of opportunistic infections. When should ART be initiated?",
    "options": {
      "A": "When CD4 drops below 350",
      "B": "When CD4 drops below 200",
      "C": "Immediately, regardless of CD4 count",
      "D": "Only after CD4 drops below 500"
    },
    "answer": "C",
    "explanation": "Current guidelines (WHO, DHHS, IAS-USA): initiate ART immediately in all HIV-positive patients regardless of CD4 count. Evidence: START trial showed benefit of early ART even at CD4 >500 (reduced serious illness and death). Earlier ART reduces transmission, prevents immunological damage, and reduces non-AIDS-defining events."
  },
  {
    "id": 246,
    "chapter": 28,
    "domain": "Infectious Disease",
    "question": "A 35-year-old HIV-positive patient is started on ritonavir-boosted darunavir (a protease inhibitor). Ritonavir is added for which pharmacological reason?",
    "options": {
      "A": "Ritonavir has direct antiviral activity against HIV",
      "B": "Ritonavir inhibits CYP3A4, increasing darunavir bioavailability and plasma levels (pharmacokinetic boosting)",
      "C": "Ritonavir prevents integrase activity",
      "D": "Ritonavir acts synergistically by blocking reverse transcriptase"
    },
    "answer": "B",
    "explanation": "Ritonavir (and cobicistat) are pharmacokinetic boosters \u2014 potent CYP3A4 inhibitors that dramatically increase plasma concentrations of co-administered PIs (darunavir, lopinavir, atazanavir). This allows once-daily dosing and lower PI doses. Ritonavir has negligible antiviral activity at booster doses. Many drug interactions result from CYP3A4 inhibition."
  },
  {
    "id": 247,
    "chapter": 29,
    "domain": "Rheumatology",
    "question": "A 35-year-old woman has 8 weeks of bilateral symmetric PIP and MCP joint swelling, morning stiffness lasting 2 hours, elevated CRP, positive RF, and anti-CCP antibodies. The diagnosis is:",
    "options": {
      "A": "Osteoarthritis",
      "B": "Rheumatoid arthritis",
      "C": "Psoriatic arthritis",
      "D": "Systemic lupus erythematosus"
    },
    "answer": "B",
    "explanation": "RA 2010 ACR/EULAR criteria: small joint involvement (MCP/PIP), >6 weeks duration, morning stiffness >1 hour, elevated CRP/ESR, positive RF and/or anti-CCP. Anti-CCP has 95% specificity for RA. Early aggressive DMARD therapy (methotrexate within 3 months) to prevent joint destruction."
  },
  {
    "id": 248,
    "chapter": 29,
    "domain": "Rheumatology",
    "question": "A 45-year-old man with RA on methotrexate has elevated LFTs (ALT 3\u00d7 ULN). His liver biopsy shows mild steatosis. Which intervention is most appropriate?",
    "options": {
      "A": "Discontinue methotrexate permanently",
      "B": "Reduce methotrexate dose, optimize folate supplementation, and repeat LFTs in 4\u20136 weeks",
      "C": "Add prednisone",
      "D": "Switch to hydroxychloroquine"
    },
    "answer": "B",
    "explanation": "Methotrexate hepatotoxicity management: transient LFT elevations (<3\u00d7 ULN) \u2014 reduce dose and recheck. Persistent elevation >3\u00d7 ULN \u2192 hold temporarily and recheck. Folic acid 1 mg/day reduces MTX toxicity without compromising efficacy. Liver biopsy when cumulative dose >3.5\u20134 g or ongoing elevation. Do not abruptly discontinue."
  },
  {
    "id": 249,
    "chapter": 29,
    "domain": "Rheumatology",
    "question": "A 55-year-old woman with RA on TNF-inhibitor therapy is found to have a positive QuantiFERON-TB Gold test (IGRA). She has no symptoms and CXR is normal. What is the appropriate management?",
    "options": {
      "A": "Delay biologics indefinitely",
      "B": "Treat with isoniazid \u00d7 9 months and start the TNF inhibitor after 1 month of INH",
      "C": "Start the TNF inhibitor now with close monitoring",
      "D": "BAL to rule out active TB before treatment"
    },
    "answer": "B",
    "explanation": "Latent TB before biologic therapy: treat latent TB with INH \u00d7 9 months (or rifampin \u00d7 4 months) before initiating TNF inhibitors. DELAY biologics until at least 1 month of anti-TB therapy has been completed. TNF inhibitors markedly increase risk of TB reactivation (40-fold). Screen all patients with IGRA or TST before starting."
  },
  {
    "id": 250,
    "chapter": 29,
    "domain": "Rheumatology",
    "question": "A 28-year-old woman has facial butterfly rash, photosensitivity, polyarthritis, pleuritis, ANA 1:640, anti-dsDNA antibodies positive, low C3/C4, and thrombocytopenia. The diagnosis is:",
    "options": {
      "A": "Drug-induced lupus",
      "B": "Mixed connective tissue disease",
      "C": "Systemic lupus erythematosus",
      "D": "Undifferentiated connective tissue disease"
    },
    "answer": "C",
    "explanation": "SLE diagnosis (2019 EULAR/ACR criteria): entry criterion = ANA \u22651:80 + points from domains. Highly specific for SLE: anti-dsDNA, anti-Sm, lupus nephritis, hemolytic anemia. Low C3/C4 reflects complement consumption during active disease. Treatment: hydroxychloroquine (background therapy for all SLE), NSAIDs/steroids for mild disease, immunosuppressives for organ-threatening disease."
  },
  {
    "id": 251,
    "chapter": 29,
    "domain": "Rheumatology",
    "question": "A 35-year-old woman with SLE develops rising creatinine, hematuria, RBC casts, and proteinuria 3.8 g/day. Renal biopsy shows Class IV diffuse proliferative lupus nephritis. The standard induction therapy is:",
    "options": {
      "A": "Hydroxychloroquine alone",
      "B": "High-dose prednisone + mycophenolate mofetil (or IV cyclophosphamide)",
      "C": "Rituximab alone",
      "D": "Plasmapheresis + prednisone"
    },
    "answer": "B",
    "explanation": "Class IV (diffuse proliferative) lupus nephritis: most severe form, highest risk of ESRD. Induction: high-dose steroids + mycophenolate mofetil (preferred over cyclophosphamide \u2014 equivalent efficacy, less toxicity, ALMS trial) or IV cyclophosphamide (NIH regimen). Maintenance: lower-dose MMF + steroids \u00d7 minimum 3 years."
  },
  {
    "id": 252,
    "chapter": 29,
    "domain": "Rheumatology",
    "question": "A 65-year-old man has bilateral temporal headaches, jaw claudication, scalp tenderness, and vision changes in his right eye. ESR is 110 mm/hr, CRP elevated. The most important immediate intervention is:",
    "options": {
      "A": "Temporal artery biopsy before starting any treatment",
      "B": "Immediate high-dose prednisone (1 mg/kg/day) to prevent vision loss, then temporal artery biopsy within 2 weeks",
      "C": "Refer to ophthalmology urgently",
      "D": "Methotrexate as first-line"
    },
    "answer": "B",
    "explanation": "Giant cell arteritis (GCA) with visual symptoms is an emergency. DO NOT DELAY steroids for biopsy \u2014 start high-dose prednisone (1 mg/kg/day) immediately. If visual loss is present or imminent: IV methylprednisolone 1 g/day \u00d7 3 days first. Temporal artery biopsy within 2 weeks (steroids do not significantly alter biopsy findings for 2\u20134 weeks). Delay can cause permanent blindness."
  },
  {
    "id": 253,
    "chapter": 29,
    "domain": "Rheumatology",
    "question": "A 48-year-old woman with limited systemic sclerosis develops digital ischemia with color changes (white, then blue, then red) triggered by cold. The diagnosis of Raynaud's phenomenon is confirmed. Which initial treatment is most appropriate?",
    "options": {
      "A": "Aspirin",
      "B": "Calcium channel blocker (nifedipine)",
      "C": "Warfarin",
      "D": "Losartan only if calcium channel blockers fail"
    },
    "answer": "B",
    "explanation": "Raynaud's phenomenon: vasospastic digital ischemia. Treatment: behavioral (avoid cold, gloves, stop smoking) + vasodilators. First-line pharmacological: long-acting dihydropyridine calcium channel blockers (nifedipine, amlodipine). If refractory: PDE-5 inhibitors (sildenafil), IV prostaglandins, topical nitrates, alpha-blockers (prazosin)."
  },
  {
    "id": 254,
    "chapter": 29,
    "domain": "Rheumatology",
    "question": "A 52-year-old man with gout has had 4 attacks in the past year. Serum uric acid is 9.8 mg/dL. What is the uric acid target for urate-lowering therapy and preferred first-line agent?",
    "options": {
      "A": "Target UA <6.0 mg/dL; allopurinol first-line",
      "B": "Target UA <5.0 mg/dL; probenecid first-line",
      "C": "Target UA <7.0 mg/dL; colchicine first-line",
      "D": "Target UA <6.0 mg/dL; febuxostat first-line in all patients"
    },
    "answer": "A",
    "explanation": "ACR 2020 guidelines: target serum urate <6.0 mg/dL (or <5.0 mg/dL in tophaceous gout). Allopurinol (xanthine oxidase inhibitor) is first-line ULT \u2014 start at low dose (100 mg/day) and titrate. Initiate colchicine or NSAID prophylaxis for 3\u20136 months when starting ULT to prevent gout flares. Febuxostat is second-line (CARES trial: increased CV mortality vs. allopurinol)."
  },
  {
    "id": 255,
    "chapter": 29,
    "domain": "Rheumatology",
    "question": "A 68-year-old man develops large joint effusions (knees, wrists) with calcium pyrophosphate crystals on joint aspiration (positively birefringent rhomboid crystals). Radiograph shows chondrocalcinosis. The diagnosis is:",
    "options": {
      "A": "Gout",
      "B": "Calcium pyrophosphate deposition disease (CPPD/pseudogout)",
      "C": "Septic arthritis",
      "D": "Hemarthrosis"
    },
    "answer": "B",
    "explanation": "CPPD (pseudogout): calcium pyrophosphate dihydrate crystals \u2014 weakly POSITIVELY birefringent (vs. gout: negatively birefringent needle-shaped monosodium urate crystals). Rhomboid/rod-shaped crystals. Chondrocalcinosis on X-ray. Associations: hyperparathyroidism, hemochromatosis, hypomagnesemia. Treatment: NSAIDs, colchicine, or intraarticular steroids (similar to acute gout)."
  },
  {
    "id": 256,
    "chapter": 29,
    "domain": "Rheumatology",
    "question": "Ankylosing spondylitis is most strongly associated with which HLA haplotype?",
    "options": {
      "A": "HLA-DR4",
      "B": "HLA-B27",
      "C": "HLA-DQ2",
      "D": "HLA-DR3"
    },
    "answer": "B",
    "explanation": "Ankylosing spondylitis (axial spondyloarthropathy): HLA-B27 in >90% of patients (vs. 5\u201310% in general population). Presents with inflammatory back pain (improves with exercise, worse at rest), sacroiliitis on MRI, bamboo spine on X-ray in advanced disease. Treatment: NSAIDs first-line; biologics (TNF inhibitors or IL-17 inhibitors \u2014 secukinumab) for refractory disease."
  },
  {
    "id": 257,
    "chapter": 30,
    "domain": "Dermatology",
    "question": "A 45-year-old man has well-defined, erythematous, scaly plaques with silvery scale on his elbows and scalp, and nail pitting. The diagnosis is:",
    "options": {
      "A": "Eczema (atopic dermatitis)",
      "B": "Psoriasis vulgaris",
      "C": "Seborrheic dermatitis",
      "D": "Tinea corporis"
    },
    "answer": "B",
    "explanation": "Psoriasis vulgaris: well-demarcated erythematous plaques with silvery scale, preferentially elbows, knees, scalp, nails (pitting, onycholysis). Auspitz sign (pinpoint bleeding when scale removed). Associated with psoriatic arthritis (10\u201330%), metabolic syndrome, and CV risk. Treatment: topical agents, phototherapy, biologics (IL-17, IL-23, TNF inhibitors) for moderate-severe."
  },
  {
    "id": 258,
    "chapter": 30,
    "domain": "Dermatology",
    "question": "A 72-year-old man has a chronic, non-healing ulcerated lesion on his lower lip with rolled, pearly edges and surface telangiectasia. The most likely diagnosis is:",
    "options": {
      "A": "Squamous cell carcinoma",
      "B": "Basal cell carcinoma",
      "C": "Actinic keratosis",
      "D": "Keratoacanthoma"
    },
    "answer": "B",
    "explanation": "Basal cell carcinoma (BCC): most common skin cancer. Pearly, translucent papule/nodule with rolled edges, surface telangiectasia, central ulceration (rodent ulcer). Found on sun-exposed areas (head/neck). BCC rarely metastasizes but is locally destructive. Treatment: surgical excision (Mohs surgery for high-risk locations). Vismodegib for advanced/metastatic BCC."
  },
  {
    "id": 259,
    "chapter": 30,
    "domain": "Dermatology",
    "question": "A 55-year-old fair-skinned woman has a new pigmented lesion on her back: asymmetric, multiple colors (black, brown, red), irregular borders, 8 mm diameter. She noticed it growing over 3 months. The ABCDEs of melanoma are met. The most appropriate next step is:",
    "options": {
      "A": "Observation for 3 months",
      "B": "Cryotherapy",
      "C": "Excisional biopsy with 1\u20132 mm margins",
      "D": "Dermoscopy and reassurance"
    },
    "answer": "C",
    "explanation": "Any suspicious pigmented lesion should undergo excisional biopsy with 1\u20132 mm margins (adequate for staging). Shave biopsy is inappropriate (may not include deepest portion for Breslow thickness measurement). Breslow thickness is the most important prognostic factor in melanoma. Do not treat before histological diagnosis."
  },
  {
    "id": 260,
    "chapter": 30,
    "domain": "Dermatology",
    "question": "A 35-year-old woman develops painful vesicles in a dermatomal distribution along her right thorax (T5 dermatome) after immunosuppression for a solid organ transplant. The diagnosis is:",
    "options": {
      "A": "Herpes simplex virus type 1 labialis",
      "B": "Herpes zoster (shingles)",
      "C": "Contact dermatitis",
      "D": "Bullous pemphigoid"
    },
    "answer": "B",
    "explanation": "Herpes zoster: VZV reactivation in dorsal root ganglion \u2192 painful dermatomal rash. Prodrome of pain/burning precedes vesicular eruption. Treatment: acyclovir or valacyclovir within 72 hours of rash onset reduces duration and severity. Zoster vaccine (recombinant, Shingrix) is 90%+ effective \u2014 recommended for adults \u226550."
  },
  {
    "id": 261,
    "chapter": 30,
    "domain": "Dermatology",
    "question": "A 68-year-old woman on long-term NSAIDs develops widespread blistering involving the trunk with nikolsky sign negative and sub-epidermal blisters with eosinophil infiltrate. The most likely diagnosis is:",
    "options": {
      "A": "Pemphigus vulgaris",
      "B": "Bullous pemphigoid",
      "C": "Stevens-Johnson syndrome",
      "D": "Epidermolysis bullosa"
    },
    "answer": "B",
    "explanation": "Bullous pemphigoid: IgG autoantibodies against BP180/BP230 hemidesmosomal antigens \u2192 sub-epidermal blistering. Large, tense bullae; Nikolsky sign NEGATIVE (vs. pemphigus vulgaris: IgG against desmogleins \u2192 intraepidermal blistering, Nikolsky POSITIVE, mucosal involvement). Treatment: superpotent topical steroids; systemic steroids for severe disease."
  },
  {
    "id": 262,
    "chapter": 30,
    "domain": "Dermatology",
    "question": "Which of the following correctly describes the Nikolsky sign and its clinical significance?",
    "options": {
      "A": "Pressure on intact skin causes skin to blister/peel \u2014 positive in pemphigus vulgaris and TEN/SJS",
      "B": "Pressure causes erythema only \u2014 positive in erythema multiforme",
      "C": "Scratching causes wheals \u2014 positive in dermatographism",
      "D": "Light touch causes blistering \u2014 positive in bullous pemphigoid"
    },
    "answer": "A",
    "explanation": "Nikolsky sign: lateral shearing pressure on apparently normal skin causes epidermal separation/slippage. Positive in pemphigus vulgaris (intraepidermal split due to desmosome antibodies) and toxic epidermal necrolysis/SJS (extensive keratinocyte apoptosis). Negative in bullous pemphigoid (deeper split, more stable)."
  },
  {
    "id": 263,
    "chapter": 31,
    "domain": "Hospital Medicine",
    "question": "A 75-year-old woman is admitted after hip fracture surgery. On postoperative day 2, she is disoriented, cannot recall the day or year, and is trying to remove her IV. She was cognitively normal at baseline. Her urine output has been adequate. The most appropriate initial management is:",
    "options": {
      "A": "Haloperidol 2 mg IV to control agitation",
      "B": "Investigate and treat underlying causes (medications, pain, constipation, urinary retention, infection); reorientation, mobilization, sleep hygiene",
      "C": "Lorazepam 1 mg IV for sedation",
      "D": "Transfer to psychiatry"
    },
    "answer": "B",
    "explanation": "Postoperative delirium: always treat underlying cause first. Delirium workup: medications (opioids, benzos, anticholinergics), infection, metabolic (electrolytes, glucose), pain, urinary retention, constipation. Non-pharmacological interventions first (HELP protocol). Antipsychotics (haloperidol) only for dangerous agitation \u2014 do not reduce delirium incidence. Benzodiazepines worsen delirium."
  },
  {
    "id": 264,
    "chapter": 31,
    "domain": "Hospital Medicine",
    "question": "A 68-year-old man undergoes elective knee replacement. He has stable CAD with an EF of 50% and takes metoprolol, aspirin, and atorvastatin. His functional capacity is 5 METs. Which perioperative management is correct?",
    "options": {
      "A": "Hold metoprolol 24 hours before surgery to avoid hypotension",
      "B": "Continue metoprolol perioperatively; continue aspirin unless high bleeding risk",
      "C": "Stop aspirin 7 days before surgery in all patients",
      "D": "Order stress test before all non-cardiac surgeries"
    },
    "answer": "B",
    "explanation": "Perioperative beta-blocker management: continue in patients already taking them (rebound tachycardia/hypertension risk if stopped). Aspirin: continue for most cardiac patients perioperatively (only hold for surgeries with extreme bleeding risk: neurosurgery, posterior eye surgery). Stress testing: only if it would change management \u2014 not routinely before low-risk surgeries."
  },
  {
    "id": 265,
    "chapter": 31,
    "domain": "Hospital Medicine",
    "question": "A hospitalized patient develops a pressure injury on the sacrum. The wound extends through the dermis into subcutaneous tissue but does not expose muscle or bone. This is classified as:",
    "options": {
      "A": "Stage 1 pressure injury",
      "B": "Stage 2 pressure injury",
      "C": "Stage 3 pressure injury",
      "D": "Stage 4 pressure injury"
    },
    "answer": "C",
    "explanation": "Pressure injury staging: Stage 1 = non-blanchable erythema of intact skin. Stage 2 = partial-thickness dermal loss (shallow open ulcer or blister). Stage 3 = full-thickness skin loss exposing subcutaneous fat (no bone/tendon/muscle). Stage 4 = full-thickness with bone, tendon, or muscle exposure. Unstageable = obscured by slough/eschar."
  },
  {
    "id": 266,
    "chapter": 31,
    "domain": "Hospital Medicine",
    "question": "A 72-year-old man is admitted with a COPD exacerbation. On hospital day 3, he is improving. The case manager reports he lives alone and cannot manage his MDIs due to arthritic hands. Discharge planning includes which of the following?",
    "options": {
      "A": "Discharge him home today regardless \u2014 social factors are not medical concerns",
      "B": "Arrange home health nursing, physical therapy, and 7-day follow-up; review inhaler technique before discharge",
      "C": "Recommend nursing home placement immediately",
      "D": "Keep him hospitalized until full recovery to avoid readmission"
    },
    "answer": "B",
    "explanation": "Effective hospital discharge requires: structured reconciliation, patient education (teach-back on medications), follow-up appointment within 7 days, and addressing social determinants. Home health nursing and PT address the functional barrier. Early post-discharge follow-up reduces 30-day readmissions (BOOST, Project RED trials)."
  },
  {
    "id": 267,
    "chapter": 31,
    "domain": "Hospital Medicine",
    "question": "A 78-year-old woman with advanced dementia and multiple organ failure is admitted from a nursing home. Her health proxy reports she had previously expressed she would not want life-sustaining treatment. The most appropriate action is:",
    "options": {
      "A": "Initiate full ICU-level care pending family meeting",
      "B": "Contact the health proxy to clarify goals of care, confirm prior expressed wishes, and complete goals of care documentation (POLST/DNR)",
      "C": "Transfer to palliative care unit without discussion",
      "D": "Proceed with all interventions until formal advance directive is located"
    },
    "answer": "B",
    "explanation": "Goals of care: the healthcare proxy has legal authority to make decisions based on the patient's previously expressed wishes (substituted judgment). Document clearly in POLST (Physician Orders for Life-Sustaining Treatment). Goals-of-care conversations should happen proactively in patients with serious illness \u2014 not during a crisis."
  },
  {
    "id": 268,
    "chapter": 31,
    "domain": "Hospital Medicine",
    "question": "The ISBAR framework used during clinical handoffs stands for:",
    "options": {
      "A": "Identify, Situation, Background, Assessment, Recommendation",
      "B": "Inform, Summarize, Brief, Assess, Review",
      "C": "Initiate, Stabilize, Breathe, Assess, Revive",
      "D": "Identify, Safety, Background, Action, Response"
    },
    "answer": "A",
    "explanation": "ISBAR (or SBAR): Identify (patient ID) \u2192 Situation (why calling/concern) \u2192 Background (relevant history) \u2192 Assessment (clinical impression) \u2192 Recommendation (requested action). Used for structured verbal handoffs, paging consultants, and shift changes. I-PASS (Illness severity, Patient summary, Action list, Situation awareness, Synthesis) is validated for formal handoffs."
  },
  {
    "id": 269,
    "chapter": 31,
    "domain": "Hospital Medicine",
    "question": "A 65-year-old man with COPD and atrial fibrillation on apixaban requires an elective colonoscopy. Which perioperative anticoagulation management is appropriate?",
    "options": {
      "A": "Bridge with LMWH for 5 days before procedure",
      "B": "Hold apixaban for 1\u20132 days before the procedure (high-bleed-risk colonoscopy) and resume 24\u201348 hours after",
      "C": "Continue apixaban throughout",
      "D": "Switch to warfarin for better control around the procedure"
    },
    "answer": "B",
    "explanation": "DOAC perioperative management: for high-bleeding-risk procedures (colonoscopy with polypectomy), hold apixaban 48 hours before (1\u20132 days for normal renal function). Bridging is NOT recommended for AF without mechanical valve per BRIDGE trial (increased bleeding, no thrombosis reduction). Resume DOAC 24\u201348 hours post-procedure."
  },
  {
    "id": 270,
    "chapter": 31,
    "domain": "Hospital Medicine",
    "question": "A hospital's CAUTI (catheter-associated UTI) rate is 3.2 per 1,000 catheter days. Which intervention is most effective at reducing CAUTI rates?",
    "options": {
      "A": "Daily chlorhexidine bathing",
      "B": "Prophylactic antibiotics for all catheterized patients",
      "C": "Daily assessment and early removal of urinary catheters when no longer indicated",
      "D": "Changing catheters every 72 hours"
    },
    "answer": "C",
    "explanation": "CAUTI prevention: the single most effective intervention is removing urinary catheters as soon as they are no longer clinically necessary. Each additional catheter day increases CAUTI risk by 3\u20137%. Nurse-driven catheter removal protocols (daily necessity review) are the highest-evidence strategy. Prophylactic antibiotics worsen antimicrobial resistance."
  },
  {
    "id": 271,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A patient on warfarin for AF is prescribed clarithromycin for a respiratory infection. Four days later, INR is 8.7 and she has minor gum bleeding. What is the mechanism of this interaction?",
    "options": {
      "A": "Clarithromycin is a CYP3A4 inducer that reduces warfarin levels",
      "B": "Clarithromycin inhibits CYP3A4, reducing warfarin metabolism and increasing INR",
      "C": "Clarithromycin inhibits CYP2C9, the primary warfarin-metabolizing enzyme",
      "D": "Clarithromycin directly inhibits clotting factors"
    },
    "answer": "C",
    "explanation": "Warfarin (S-warfarin, the more potent enantiomer) is metabolized by CYP2C9. Clarithromycin inhibits both CYP3A4 and, to a lesser extent, CYP2C9, reducing warfarin metabolism \u2192 elevated warfarin levels \u2192 supratherapeutic INR. This is a common clinically significant interaction. Monitor INR closely when macrolides are added to warfarin."
  },
  {
    "id": 272,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A 68-year-old man on simvastatin 40 mg is started on azole antifungal therapy for a serious fungal infection. Which is the most appropriate action?",
    "options": {
      "A": "Continue simvastatin at the same dose",
      "B": "Temporarily hold simvastatin or switch to a less CYP3A4-dependent statin (pravastatin, rosuvastatin)",
      "C": "Reduce simvastatin dose to 10 mg",
      "D": "Add CoQ10 supplementation to prevent rhabdomyolysis"
    },
    "answer": "B",
    "explanation": "Azole antifungals (itraconazole, ketoconazole, voriconazole) are strong CYP3A4 inhibitors. Simvastatin is primarily metabolized by CYP3A4 \u2192 azoles dramatically increase simvastatin levels \u2192 risk of rhabdomyolysis (FDA contraindication). Hold simvastatin during azole therapy or switch to pravastatin/rosuvastatin (not significantly CYP3A4-dependent)."
  },
  {
    "id": 273,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A 45-year-old patient with HIV on lopinavir/ritonavir is started on rifampin for active TB. What is the expected drug interaction?",
    "options": {
      "A": "Rifampin inhibits CYP3A4, increasing lopinavir levels",
      "B": "Rifampin strongly induces CYP3A4, dramatically reducing lopinavir plasma levels and risking virologic failure",
      "C": "There is no significant interaction between rifampin and protease inhibitors",
      "D": "Ritonavir neutralizes the CYP3A4 induction by rifampin"
    },
    "answer": "B",
    "explanation": "Rifampin is the most potent CYP3A4 inducer available. It reduces lopinavir/ritonavir levels by >75%, rendering the regimen ineffective. In TB-HIV coinfection, rifampin should NOT be combined with most HIV protease inhibitors. Rifabutin (weaker inducer) is the preferred rifamycin with PIs. Alternatively, use efavirenz-based regimen (NNRTI), which can be dosed higher to compensate."
  },
  {
    "id": 274,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "An elderly patient is prescribed diphenhydramine for insomnia. According to the Beers Criteria, which risk is most relevant?",
    "options": {
      "A": "QT prolongation",
      "B": "Cognitive impairment and increased fall risk due to anticholinergic and sedating properties",
      "C": "Gastrointestinal bleeding",
      "D": "Renal toxicity"
    },
    "answer": "B",
    "explanation": "Diphenhydramine and first-generation antihistamines appear on the Beers Criteria for adults \u226565. Their anticholinergic effects (urinary retention, confusion, dry mouth, constipation) + sedation increase risk of cognitive impairment, delirium, and falls/hip fractures. Preferred alternatives for insomnia in elderly: sleep hygiene, CBT-I, melatonin, short-term low-dose doxepin."
  },
  {
    "id": 275,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "Type B adverse drug reactions differ from Type A reactions in that they are:",
    "options": {
      "A": "Dose-dependent and predictable from pharmacological effects",
      "B": "Idiosyncratic, dose-independent, and unpredictable (e.g., hypersensitivity, Stevens-Johnson syndrome)",
      "C": "Chronic and develop with long-term use",
      "D": "Related to withdrawal from medications"
    },
    "answer": "B",
    "explanation": "Type A (Augmented): dose-dependent, predictable extension of pharmacological effect (most ADRs, ~80%). Type B (Bizarre): idiosyncratic, dose-independent, often immune-mediated (Stevens-Johnson, agranulocytosis, anaphylaxis). Type C (Chronic): long-term use (analgesic nephropathy). Type D (Delayed): delayed manifestation (carcinogenesis from immunosuppressives)."
  },
  {
    "id": 276,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A 74-year-old patient is on 12 different medications. Which term describes this scenario and which approach can help rationalize the regimen?",
    "options": {
      "A": "Polytherapy \u2014 medication reconciliation",
      "B": "Polypharmacy \u2014 structured medication review and deprescribing",
      "C": "Multi-drug therapy \u2014 pharmacogenomic testing",
      "D": "Combination therapy \u2014 therapeutic substitution"
    },
    "answer": "B",
    "explanation": "Polypharmacy (\u22655 medications) is common in elderly patients and increases risk of ADRs, drug interactions, non-adherence, and falls. Deprescribing (systematic reduction of medications with risk exceeding benefit) is the solution. Tools: Medication Appropriateness Index, Beers Criteria, STOPP/START criteria. Medication reconciliation at every care transition prevents errors."
  },
  {
    "id": 277,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A woman with epilepsy becomes pregnant. She is taking valproate for generalized seizures. What is the primary teratogenic risk of valproate in the first trimester?",
    "options": {
      "A": "Cardiac septal defects",
      "B": "Neural tube defects (spina bifida) and cognitive impairment",
      "C": "Limb reduction defects",
      "D": "Craniofacial abnormalities only"
    },
    "answer": "B",
    "explanation": "Valproate is a major teratogen: neural tube defects (1\u20132% risk \u2014 much higher than background 0.06%), cognitive impairment/autism spectrum disorder, and multiple congenital anomalies. Alternative AEDs (lamotrigine, levetiracetam) have better safety profiles. High-dose folic acid (4\u20135 mg/day) periconceptionally reduces NTD risk but does not eliminate it with valproate."
  },
  {
    "id": 278,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A patient on tacrolimus (narrow therapeutic index, CYP3A4 substrate) is started on voriconazole for aspergillosis. What monitoring and dose adjustment are required?",
    "options": {
      "A": "No adjustment needed \u2014 voriconazole does not interact with tacrolimus",
      "B": "Anticipate 3\u20135\u00d7 increase in tacrolimus levels; reduce tacrolimus dose empirically and monitor levels closely",
      "C": "Increase tacrolimus dose to overcome competitive inhibition",
      "D": "Switch to cyclosporine which has no CYP3A4 interactions"
    },
    "answer": "B",
    "explanation": "Tacrolimus is a narrow-therapeutic-index CYP3A4 substrate. Voriconazole is a potent CYP3A4 inhibitor \u2192 tacrolimus levels increase 3\u20135\u00d7 \u2192 toxicity risk (nephrotoxicity, neurotoxicity). Reduce tacrolimus dose by ~2/3 empirically when starting voriconazole and monitor daily tacrolimus trough levels until stable. This is one of the most important pharmacokinetic interactions in transplant medicine."
  },
  {
    "id": 279,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "P-glycoprotein (P-gp) is a drug efflux transporter relevant to which drug interaction?",
    "options": {
      "A": "Statins and fibrates (OATP1B1)",
      "B": "Digoxin and amiodarone (P-gp inhibition increases digoxin levels)",
      "C": "Warfarin and NSAIDs (CYP2C9)",
      "D": "Clopidogrel and PPIs (CYP2C19)"
    },
    "answer": "B",
    "explanation": "P-glycoprotein (ABCB1) transporter: pumps drugs out of cells in intestine, liver, kidney, and blood-brain barrier. Digoxin is a P-gp substrate. P-gp inhibitors (amiodarone, clarithromycin, verapamil) reduce digoxin efflux \u2192 increased digoxin absorption and reduced renal elimination \u2192 elevated digoxin levels \u2192 toxicity (narrow therapeutic index). Reduce digoxin dose by 20\u201350% when adding P-gp inhibitors."
  },
  {
    "id": 280,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A patient is found to be a CYP2C19 poor metabolizer (homozygous loss-of-function alleles). She is prescribed clopidogrel after coronary stent placement. What is the clinical implication?",
    "options": {
      "A": "Increased bleeding risk from higher clopidogrel levels",
      "B": "Reduced antiplatelet effect due to impaired conversion of clopidogrel to its active metabolite",
      "C": "No clinically significant effect",
      "D": "Increased clopidogrel efficacy requiring dose reduction"
    },
    "answer": "B",
    "explanation": "Clopidogrel is a prodrug requiring CYP2C19 hepatic activation. CYP2C19 poor metabolizers (10\u201315% of Caucasians, 14\u201322% of East Asians) cannot adequately activate clopidogrel \u2192 reduced platelet inhibition \u2192 increased risk of stent thrombosis. Alternative: ticagrelor or prasugrel (do not require hepatic activation). FDA black box warning: test CYP2C19 status in high-risk patients."
  },
  {
    "id": 281,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "Digoxin toxicity is worsened by which electrolyte abnormality?",
    "options": {
      "A": "Hyperkalemia",
      "B": "Hypokalemia",
      "C": "Hypernatremia",
      "D": "Hypophosphatemia"
    },
    "answer": "B",
    "explanation": "Digoxin binds to and inhibits the Na+/K+-ATPase pump. Hypokalemia potentiates digoxin toxicity \u2014 low extracellular K+ means less competition for digoxin binding at the K+ binding site. Conversely, hyperkalemia is protective (competes with digoxin). Other risk factors for toxicity: hypomagnesemia, hypercalcemia, hypothyroidism, renal failure (digoxin is renally cleared)."
  },
  {
    "id": 282,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A patient receives a loading dose of a drug with a volume of distribution (Vd) of 50 L/kg (body weight 70 kg) and the desired plasma concentration is 1 mcg/mL. What is the required loading dose?",
    "options": {
      "A": "140 mg",
      "B": "1,400 mg",
      "C": "3,500 mg",
      "D": "350 mg"
    },
    "answer": "C",
    "explanation": "Loading dose = Vd \u00d7 Css = (50 L/kg \u00d7 70 kg) \u00d7 1 mcg/mL = 3,500 L \u00d7 1 mcg/mL = 3,500 mg = 3,500,000 mcg = 3,500 mg. Drugs with very large Vd (e.g., amiodarone ~60 L/kg) distribute extensively into tissues and require large loading doses to achieve therapeutic plasma concentrations."
  },
  {
    "id": 283,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "Which drug undergoes phase II conjugation as its primary metabolic pathway and does not significantly interact with the cytochrome P450 system?",
    "options": {
      "A": "Warfarin",
      "B": "Diazepam",
      "C": "Lorazepam (glucuronidation)",
      "D": "Simvastatin"
    },
    "answer": "C",
    "explanation": "Lorazepam, oxazepam, and temazepam (LOT) undergo direct glucuronidation (Phase II) without significant CYP450 involvement. This makes them safer in liver disease and in elderly patients with reduced CYP enzyme activity compared to diazepam (CYP3A4, long half-life, active metabolites). 'LOT' benzodiazepines are preferred in patients with hepatic dysfunction."
  },
  {
    "id": 284,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A 35-year-old woman is started on isoniazid for latent TB. She is known to be a slow acetylator. What dose adjustment and side effect monitoring are most important?",
    "options": {
      "A": "Increase dose \u2014 slow acetylators have reduced drug levels",
      "B": "No dose change \u2014 standard INH dosing; monitor for peripheral neuropathy (give pyridoxine B6); higher risk of hepatotoxicity",
      "C": "Decrease dose \u2014 slow acetylators accumulate INH",
      "D": "Switch to rifampin \u2014 INH is ineffective in slow acetylators"
    },
    "answer": "B",
    "explanation": "Isoniazid is acetylated by NAT2 enzyme. Slow acetylators (50% of Caucasians, 10\u201315% of Asians): higher INH levels \u2192 more side effects (peripheral neuropathy, hepatotoxicity). Standard INH doses are used (no dose change). Pyridoxine (vitamin B6) 25\u201350 mg/day is added to prevent INH-induced peripheral neuropathy (INH competitively inhibits pyridoxine metabolism)."
  },
  {
    "id": 285,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A hospitalized patient with a Staph. aureus bloodstream infection is on vancomycin. His trough level is 25 mcg/mL (target 15\u201320). He develops rising creatinine. The most appropriate action is:",
    "options": {
      "A": "Increase the vancomycin dose",
      "B": "Switch to linezolid",
      "C": "Hold a dose and recheck vancomycin trough level and renal function before next dose",
      "D": "Add rifampin to the regimen"
    },
    "answer": "C",
    "explanation": "Vancomycin nephrotoxicity: elevated trough (>20 mcg/mL) increases nephrotoxicity risk. With rising creatinine and supratherapeutic trough: hold a dose, reassess renal function, and reduce dose or extend interval. AUC-guided dosing (AUC/MIC 400\u2013600) is now preferred over trough monitoring to reduce nephrotoxicity while maintaining efficacy (ASHP/SIDP/ACCP guidelines)."
  },
  {
    "id": 286,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "Which antibiotic is associated with QT prolongation and should be used with caution in patients taking other QT-prolonging medications?",
    "options": {
      "A": "Amoxicillin",
      "B": "Azithromycin",
      "C": "TMP-SMX",
      "D": "Doxycycline"
    },
    "answer": "B",
    "explanation": "Azithromycin (and moxifloxacin among fluoroquinolones) prolongs the QT interval and can cause torsades de pointes, especially when combined with other QT-prolonging drugs (methadone, antipsychotics, class IA/III antiarrhythmics). Baseline ECG and risk assessment recommended before azithromycin in high-risk patients."
  },
  {
    "id": 287,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A patient is found to have penicillin allergy documented as 'rash - unknown type' from childhood. She needs a 1st-generation cephalosporin for a surgical site infection. What is the appropriate management?",
    "options": {
      "A": "Give vancomycin \u2014 cross-reactivity between penicillin and cephalosporins is >10%",
      "B": "Proceed with cephalosporin \u2014 true cross-reactivity with penicillins is <1\u20132%; risk of withholding is greater",
      "C": "Order penicillin skin test and delay treatment",
      "D": "Use a fluoroquinolone to avoid any beta-lactam entirely"
    },
    "answer": "B",
    "explanation": "Historical teaching overestimated penicillin-cephalosporin cross-reactivity at 10%. Modern evidence shows true cross-reactivity is <1\u20132% (due to different R1 side chains). Cephalosporins can generally be used in patients with non-severe penicillin allergy. Penicillin allergy delabeling (skin testing/oral challenge) is recommended for patients with low-risk histories \u2014 improves antibiotic stewardship."
  },
  {
    "id": 288,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "Which NSAID has the greatest selectivity for COX-2 and thus the lowest gastrointestinal side effect profile, but carries the highest cardiovascular risk?",
    "options": {
      "A": "Ibuprofen",
      "B": "Naproxen",
      "C": "Celecoxib",
      "D": "Rofecoxib (Vioxx)"
    },
    "answer": "D",
    "explanation": "Rofecoxib (Vioxx) was a highly selective COX-2 inhibitor withdrawn from the market in 2004 due to significantly increased cardiovascular risk (VIGOR and APPROVe trials). Celecoxib (currently available COX-2 inhibitor) has lower GI risk but still carries CV risk. Naproxen appears most CV-neutral among traditional NSAIDs."
  },
  {
    "id": 289,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A patient's kidney function has decreased (CrCl 25 mL/min). Which of the following antibiotics requires the most significant dose adjustment to avoid accumulation and toxicity?",
    "options": {
      "A": "Azithromycin",
      "B": "Clindamycin",
      "C": "Ciprofloxacin",
      "D": "Gentamicin"
    },
    "answer": "D",
    "explanation": "Aminoglycosides (gentamicin, tobramycin, amikacin) are renally eliminated with no hepatic metabolism. In CrCl 25 mL/min, aminoglycoside half-life increases 4\u20135\u00d7. Significant dose reduction or interval extension is mandatory. Drug level monitoring (trough and peak, or AUC-based) is essential. Already nephrotoxic agents \u2014 use with extreme caution or alternative. Clindamycin/azithromycin are hepatically metabolized."
  },
  {
    "id": 290,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A 65-year-old woman with heart failure was recently changed from warfarin (INR 2.8) to apixaban. Her cardiologist wants to know when to start apixaban after stopping warfarin. The correct transition is:",
    "options": {
      "A": "Stop warfarin and start apixaban the next day",
      "B": "Start apixaban when INR drops to \u22642.0",
      "C": "Overlap both for 5 days",
      "D": "Wait 5 days after stopping warfarin before starting apixaban"
    },
    "answer": "B",
    "explanation": "Transitioning from warfarin to DOAC: start the DOAC when INR is \u22642.0 (to avoid over-anticoagulation from overlapping effects). For INR 2.0\u20133.0, many clinicians wait until INR <2.5 or exactly \u22642.0 depending on the DOAC. Starting too early with high INR \u2192 supratherapeutic anticoagulation. Different DOACs have slightly different transition protocols."
  },
  {
    "id": 291,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A narrow therapeutic index (NTI) drug is defined as one where:",
    "options": {
      "A": "The drug has no approved generic equivalent",
      "B": "The difference between the minimum toxic concentration and minimum effective concentration is small",
      "C": "The drug is only available in IV form",
      "D": "The drug requires refrigeration"
    },
    "answer": "B",
    "explanation": "Narrow therapeutic index (NTI) drugs have little difference between toxic and therapeutic plasma concentrations \u2014 requiring careful monitoring. Examples: warfarin, digoxin, lithium, phenytoin, vancomycin, cyclosporine, tacrolimus, aminoglycosides. Generic substitution of NTI drugs is regulated due to small bioequivalence windows."
  },
  {
    "id": 292,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A patient is to receive dose reduction of a drug based on the Cockcroft-Gault equation. His serum creatinine is 1.8 mg/dL, age 75, weight 60 kg, male. His estimated creatinine clearance is approximately:",
    "options": {
      "A": "18 mL/min",
      "B": "28 mL/min",
      "C": "38 mL/min",
      "D": "48 mL/min"
    },
    "answer": "B",
    "explanation": "Cockcroft-Gault: CrCl = [(140 - age) \u00d7 weight (kg)] / [72 \u00d7 Scr (mg/dL)] \u00d7 0.85 (if female). = [(140-75) \u00d7 60] / [72 \u00d7 1.8] = [65 \u00d7 60] / 129.6 = 3900 / 129.6 \u2248 30 mL/min. Closer to 30 than 28, but option B (28) is the nearest. In elderly patients, muscle mass decline means normal Scr (1.8 in elderly) masks significant GFR reduction."
  },
  {
    "id": 293,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A patient with acute decompensated heart failure is on IV furosemide. Which pharmacokinetic concept explains why the same oral furosemide dose is less effective in this patient?",
    "options": {
      "A": "Increased renal clearance in heart failure",
      "B": "Reduced oral bioavailability (\u2193absorption) due to gut wall edema in decompensated heart failure",
      "C": "Increased protein binding in heart failure",
      "D": "Furosemide is a prodrug that requires hepatic activation"
    },
    "answer": "B",
    "explanation": "Furosemide oral bioavailability is 50% in healthy patients and further reduced (10\u201340%) in decompensated heart failure due to gut wall edema impairing GI absorption. IV furosemide bypasses this barrier and provides reliable drug delivery. Once clinically compensated, oral bioavailability improves and oral loop diuretics resume effectiveness."
  },
  {
    "id": 294,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "Which of the following medications is considered 'absolutely contraindicated' during pregnancy due to causing fetal renal dysgenesis and oligohydramnios in the 2nd and 3rd trimesters?",
    "options": {
      "A": "Beta-blockers (all classes)",
      "B": "ACE inhibitors and ARBs",
      "C": "Calcium channel blockers",
      "D": "Low-dose aspirin"
    },
    "answer": "B",
    "explanation": "ACE inhibitors and ARBs are absolutely contraindicated in the 2nd and 3rd trimesters. They inhibit fetal angiotensin II \u2192 reduced fetal renal perfusion \u2192 fetal renal dysgenesis, oligohydramnios, limb contractures, pulmonary hypoplasia, fetal death. 1st trimester use is also avoided due to potential cardiac defects. Replace with methyldopa, labetalol, or nifedipine for BP control in pregnancy."
  },
  {
    "id": 295,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A physician chooses to use oral vancomycin instead of IV vancomycin to treat MRSA bacteremia. The pharmacokinetic reason this is inappropriate is:",
    "options": {
      "A": "Oral vancomycin is less potent than IV vancomycin",
      "B": "Oral vancomycin is not absorbed from the GI tract \u2014 it achieves no systemic blood levels",
      "C": "Oral vancomycin causes more nephrotoxicity",
      "D": "IV vancomycin cannot be converted to oral for outpatient therapy"
    },
    "answer": "B",
    "explanation": "Oral vancomycin has essentially zero systemic bioavailability (<10% absorption). It achieves high concentrations only in the GI lumen \u2014 used exclusively for C. difficile colitis (intraluminal infection). MRSA bacteremia requires IV vancomycin for systemic distribution. This is a critical pharmacokinetic principle."
  },
  {
    "id": 296,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A 72-year-old woman with ESRD on hemodialysis is prescribed metronidazole for Clostridium difficile as an alternative. Which pharmacokinetic consideration is most important?",
    "options": {
      "A": "Metronidazole is renally cleared and accumulates in ESRD requiring dose reduction",
      "B": "Metronidazole and its active metabolites accumulate in ESRD, but it is dialyzable",
      "C": "Metronidazole is hepatically metabolized but active metabolites are renally cleared \u2014 supplement dose after hemodialysis",
      "D": "No adjustment needed \u2014 metronidazole is completely hepatically metabolized"
    },
    "answer": "C",
    "explanation": "Metronidazole is hepatically metabolized, but its active metabolites (hydroxy-metronidazole) are renally eliminated. In ESRD, these accumulate \u2192 neurotoxicity (peripheral neuropathy, encephalopathy). A supplemental dose after hemodialysis is recommended as metronidazole and its metabolites are dialyzable. However, oral vancomycin or fidaxomicin are preferred for C. difficile (oral metronidazole is inferior)."
  },
  {
    "id": 297,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A patient on lithium develops tremor, ataxia, confusion, and lithium level of 2.8 mEq/L (therapeutic 0.6\u20131.2). Which intervention removes lithium most effectively?",
    "options": {
      "A": "Oral sodium polystyrene sulfonate (Kayexalate)",
      "B": "IV fluid resuscitation alone",
      "C": "Hemodialysis",
      "D": "Activated charcoal"
    },
    "answer": "C",
    "explanation": "Lithium toxicity: narrow therapeutic index (0.6\u20131.2 mEq/L). Level >2.0 with symptoms = severe toxicity requiring hemodialysis (lithium is renally excreted with small molecular weight \u2014 highly dialyzable). Activated charcoal does NOT bind lithium. IV fluids restore sodium (lithium competes with sodium in tubular reabsorption). Hemodialysis removes lithium most rapidly."
  },
  {
    "id": 298,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A 55-year-old man with gout is started on allopurinol. He is also taking azathioprine for inflammatory bowel disease. Why is this combination potentially life-threatening?",
    "options": {
      "A": "Allopurinol induces CYP3A4, reducing azathioprine efficacy",
      "B": "Allopurinol inhibits xanthine oxidase, blocking azathioprine metabolism \u2192 massive accumulation of 6-mercaptopurine \u2192 severe myelosuppression",
      "C": "Both drugs cause hepatotoxicity through the same pathway",
      "D": "Azathioprine increases allopurinol renal excretion, requiring higher doses"
    },
    "answer": "B",
    "explanation": "Azathioprine \u2192 6-mercaptopurine (6-MP) \u2192 metabolized by xanthine oxidase (XO). Allopurinol inhibits XO \u2192 6-MP accumulates \u2192 severe myelosuppression (pancytopenia, life-threatening). This is a CLASS I dangerous interaction. If both must be used: reduce azathioprine dose by 75%. Alternatively, substitute febuxostat (different mechanism) or use mycophenolate instead of azathioprine."
  },
  {
    "id": 299,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "Which statement about the half-life (t\u00bd) of a drug and time to steady state is correct?",
    "options": {
      "A": "Steady state is achieved after 1 half-life",
      "B": "Steady state is achieved after approximately 4\u20135 half-lives",
      "C": "A loading dose is always required to achieve steady state",
      "D": "The time to steady state depends on the dose, not the half-life"
    },
    "answer": "B",
    "explanation": "Steady-state concentration is reached after approximately 4\u20135 half-lives, regardless of dose or dosing interval. After 1 t\u00bd = 50% of steady state; 2 t\u00bd = 75%; 3 t\u00bd = 87.5%; 4 t\u00bd = 93.75%; 5 t\u00bd = 96.9%. A loading dose achieves target concentration immediately (bypasses the 4\u20135 half-life wait) but does NOT change time to steady state. Examples: amiodarone (t\u00bd ~40 days) takes months to reach steady state."
  },
  {
    "id": 300,
    "chapter": 32,
    "domain": "Pharmacology",
    "question": "A patient on amiodarone for atrial fibrillation develops thyroid dysfunction. Which pattern is most consistent with amiodarone-induced thyrotoxicosis (AIT)?",
    "options": {
      "A": "Low free T4, high TSH \u2014 hypothyroidism from iodine excess",
      "B": "High free T4, suppressed TSH \u2014 hyperthyroidism (AIT type 1: excess iodine-driven hormone synthesis; or type 2: destructive thyroiditis)",
      "C": "Normal free T4 with elevated reverse T3 (rT3) only",
      "D": "TSH elevation with normal free T4 \u2014 subclinical hypothyroidism only"
    },
    "answer": "B",
    "explanation": "Amiodarone contains 37% iodine by weight. AIT: high free T4 (and T3), suppressed TSH. Type 1 AIT: excess iodine drives thyroid hormone synthesis (treat with thionamides). Type 2 AIT: drug-induced destructive thyroiditis releasing preformed hormones (treat with steroids). Type 2 is more common. Amiodarone-induced hypothyroidism: high TSH (more common in iodine-sufficient regions). Monitor TFTs every 3\u20136 months."
  }
];
